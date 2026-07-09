import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANT_CLASSES = {
  primary:
    "brand-gradient rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:opacity-90 hover:shadow-brand/35",
  secondary:
    "rounded-full border-2 border-neutral-300 px-7 py-3.5 text-base font-semibold text-neutral-950 transition-colors hover:border-brand hover:text-brand",
  dark: "rounded-full bg-white px-7 py-3.5 text-base font-semibold text-neutral-950 transition-opacity hover:opacity-85",
  underline:
    "text-base font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-brand hover:text-brand",
} as const;

export function CtaLink({
  href,
  variant = "primary",
  icon,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof VARIANT_CLASSES;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(
    "inline-flex items-center gap-2",
    VARIANT_CLASSES[variant],
    className,
  );
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  // Internal app routes/anchors go through next/link for prefetching;
  // everything else (tel:, mailto:, external https://) is a plain <a>.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={classes}
    >
      {content}
    </a>
  );
}
