import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { keralaPoliceUrl } from "@/lib/contact";

const NAV_LINKS = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Engine", href: "/#engine" },
  { label: "Why Cyberwall", href: "/#why-cyberwall" },
  { label: "FAQ", href: "/faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/policy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden pt-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6">
        <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
          {/* Brand card */}
          <div className="brand-gradient flex min-h-72 flex-col justify-between rounded-[2rem] p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5">
                <Image
                  src="/cyberwall-logo.png"
                  alt="Cyberwall logo"
                  width={34}
                  height={30}
                  loading="eager"
                  priority
                />
              </span>
              <span className="font-nunito text-2xl font-bold text-white">
                Cyberwall
              </span>
            </div>

            <div>
              <p className="font-nunito text-xl leading-snug font-semibold text-white md:text-2xl">
                Verify before you trust,
                <br />
                <span className="text-white/70">powered by Kerala Police.</span>
              </p>
              <div className="mt-5 flex items-center gap-2.5">
                <Image
                  src="/kp-logo.png"
                  alt="Kerala Police logo"
                  width={26}
                  height={26}
                  className="h-auto w-auto"
                />
                <span className="text-sm font-medium text-white/80">
                  A Public Safety Initiative
                </span>
              </div>
            </div>
          </div>

          {/* Links + legal card */}
          <div className="flex flex-col justify-between rounded-[2rem] bg-white p-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="font-nunito text-sm font-semibold text-neutral-400">
                  Navigation
                </span>
                <ul className="mt-4 space-y-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base font-medium text-neutral-700 transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-nunito text-sm font-semibold text-neutral-400">
                  Official
                </span>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href={keralaPoliceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-base font-medium text-neutral-700 transition-colors hover:text-brand"
                    >
                      Kerala Police
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  {LEGAL_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        className="text-base font-medium text-neutral-600"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs leading-relaxed text-neutral-500">
                <strong className="font-semibold text-neutral-700">
                  Legal disclaimer.
                </strong>{" "}
                Cyberwall provides automated risk assessments based on available
                digital signals. Results are advisory in nature and should not
                be treated as final legal conclusions. Users should exercise
                independent judgment before making financial decisions.
              </p>
              <p className="mt-4 text-sm text-neutral-400">
                © {new Date().getFullYear()} Kerala Police. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Giant watermark */}
      <div
        aria-hidden
        className="watermark font-sans sm:mt-10 mt-4 sm:-mb-8 -mb-3 overflow-hidden text-center font-black  whitespace-nowrap"
      >
        Kerala Police
      </div>
    </footer>
  );
}
