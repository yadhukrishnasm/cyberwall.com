import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { keralaPoliceUrl } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-14">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="max-w-2xl text-xs leading-relaxed text-neutral-500">
          <strong className="font-medium text-neutral-700">
            Legal disclaimer.
          </strong>{" "}
          Cyberwall provides automated risk assessments based on available
          digital signals. Results are advisory in nature and should not be
          treated as final legal conclusions. Users should exercise
          independent judgment before making financial decisions.
        </p>

        <div className="mt-10 flex flex-col gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/kp-logo.png"
              alt="Kerala Police logo"
              width={28}
              height={28}
            />
            <div>
              <p className="text-sm font-medium text-neutral-900">
                A public safety initiative
              </p>
              <p className="text-xs text-neutral-500">
                Developed and operated under Kerala Police, Cyber Division.
              </p>
            </div>
          </div>

          <a
            href={keralaPoliceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-950"
          >
            Visit official Kerala Police website
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          © {new Date().getFullYear()} Kerala Police. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
