import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // Generate a cryptographically secure nonce for this request
  const bytes = crypto.getRandomValues(new Uint8Array(16));

  const nonce = btoa(String.fromCharCode(...bytes));

  // Pass the nonce to the App Router
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const csp = [
    "default-src 'self'",

    // Next.js + Google Analytics
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com`,

    // Next.js inline styles will use the nonce
    `style-src 'self' 'nonce-${nonce}'`,

    // Images
    "img-src 'self' data: https:",

    // Fonts (next/font/google is self-hosted)
    "font-src 'self'",

    // Google Analytics requests
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",

    // Prevent plugins
    "object-src 'none'",

    // Prevent clickjacking
    "frame-ancestors 'self'",

    // Restrict forms
    "form-action 'self'",

    // Prevent base tag injection
    "base-uri 'self'",

    // HTTPS only
    "upgrade-insecure-requests",

    // Prevent MIME sniffing
    "block-all-mixed-content",
  ].join("; ");

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    /*
     * Apply to all routes except:
     * - API routes
     * - Next.js static assets
     * - Next.js image optimization
     * - favicon
     * - robots.txt
     * - sitemap.xml
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
