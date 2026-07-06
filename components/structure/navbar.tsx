"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappHref } from "@/lib/contact";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#engine", label: "Engine" },
  { href: "#why-cyberwall", label: "Why Cyberwall" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 ">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between md:px-16 p-5 border rounded-xl border-neutral-200 bg-surface">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/cyberwall-logo.png"
            alt="Cyberwall logo"
            width={46}
            height={36}
          />
          {/*<span className="font-nohemi text-sm font-semibold tracking-tight">
            Cyberwall
          </span>*/}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {isHome &&
            NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
          <Link
            href="/faq"
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
          >
            FAQ
          </Link>
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-neutral-950 px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-85"
        >
          Try on WhatsApp
        </a>
      </div>
    </header>
  );
}
