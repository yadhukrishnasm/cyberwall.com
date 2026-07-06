import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANT_CLASSES = {
  primary:
    "rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85",
  secondary:
    "rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:border-neutral-950",
  dark: "rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-opacity hover:opacity-85",
  underline:
    "text-sm font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950",
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
