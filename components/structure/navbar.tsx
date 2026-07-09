"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "@/components/icons";
import { TryNowButton } from "@/components/ui/platform-modal";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#engine", label: "Engine" },
  { href: "#why-cyberwall", label: "Why Cyberwall" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white bg-white/85 p-5 shadow-lg shadow-neutral-950/5 backdrop-blur-md md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/cyberwall-logo.png"
            alt="Cyberwall logo"
            width={46}
            height={36}
          />
          <span className="font-nohemi hidden text-lg font-bold tracking-tight sm:inline">
            Cyberwall
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {isHome &&
            NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-neutral-600 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          <Link
            href="/faq"
            className="text-base font-medium text-neutral-600 transition-colors hover:text-brand"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <TryNowButton className="!px-4 !py-2.5 !text-sm sm:!px-5">
            Try Now
          </TryNowButton>

          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full bg-tint-blue text-brand marker:content-none">
              <MenuIcon className="h-5 w-5" />
            </summary>
            <nav className="absolute top-12 right-0 z-50 flex w-52 flex-col gap-1 rounded-2xl border border-neutral-100 bg-white p-3 shadow-xl shadow-neutral-950/10">
              {isHome &&
                NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2.5 text-base font-medium text-neutral-700 transition-colors hover:bg-tint-blue hover:text-brand"
                  >
                    {link.label}
                  </a>
                ))}
              <Link
                href="/faq"
                className="rounded-xl px-3 py-2.5 text-base font-medium text-neutral-700 transition-colors hover:bg-tint-blue hover:text-brand"
              >
                FAQ
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
