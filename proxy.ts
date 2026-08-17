import { NextRequest, NextResponse } from "next/server";

// -----------------------------------------------------------------------------
// Basic in-memory rate limiter
// -----------------------------------------------------------------------------
// This is only a basic abuse/scraping deterrent.
// It is not a replacement for a real WAF or distributed rate limiter.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 60;

const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const timestamps = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);

  return false;
}

// -----------------------------------------------------------------------------
// Proxy
// -----------------------------------------------------------------------------
export function proxy(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return new NextResponse("Too many requests", {
      status: 429,
      headers: {
        "Retry-After": "60",
      },
    });
  }

  // Redirect everything except /comingsoon itself there.
  if (request.nextUrl.pathname !== "/comingsoon") {
    return NextResponse.redirect(new URL("/comingsoon", request.url));
  }

  // Generate a cryptographically random nonce for this request.
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // ---------------------------------------------------------------------------
  // Content Security Policy
  // ---------------------------------------------------------------------------
  const csp = [
    "default-src 'self'",

    // Scripts:
    // - self: locally hosted scripts
    // - nonce: trusted inline scripts for this request
    // - strict-dynamic: trusted nonce-bearing scripts may load their
    //   dependencies
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://vercel.live https://va.vercel-scripts.com`,

    // Styles:
    // IMPORTANT: no 'unsafe-inline'.
    // Inline styles must carry this request's nonce.
    `style-src 'self' 'nonce-${nonce}'`,

    // Images
    "img-src 'self' data: https:",

    // Fonts
    "font-src 'self' data:",

    // Network connections
    "connect-src 'self' https://vercel.live https://www.google-analytics.com",

    // Prevent plugins such as Flash/PDF objects from being embedded.
    "object-src 'none'",

    // Prevent <base> tag manipulation.
    "base-uri 'self'",

    // Restrict form submissions.
    "form-action 'self'",

    // Prevent this site from being embedded by other origins.
    "frame-ancestors 'self'",

    // Force HTTP resources to HTTPS.
    "upgrade-insecure-requests",
  ].join("; ");

  // Pass the nonce to the Next.js request so Server Components/layouts
  // can access it through next/headers.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Send the CSP to the browser.
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const middleware = proxy;

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff|woff2|ttf)$).*)",
  ],
};
