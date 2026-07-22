import Image from "next/image";
import { MicIcon, PlusIcon } from "@/components/icons";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-56 sm:w-64">
      <div className="aspect-[9/19] overflow-hidden rounded-[2.65rem] border-[7px] border-neutral-950 bg-neutral-950 shadow-2xl shadow-brand/20">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-[#efeae2]">
          {/* WhatsApp header */}
          <div className="relative flex shrink-0 items-center gap-2 bg-white px-2.5 pt-6 pb-2.5 shadow-sm">
            {/* Camera/notch */}
            <span className="absolute top-2 left-1/2 h-3.5 w-14 -translate-x-1/2 rounded-full bg-neutral-950" />

            <button
              type="button"
              aria-label="Go back"
              className="flex h-7 w-5 shrink-0 items-center justify-center text-xl leading-none text-neutral-800"
            >
              ‹
            </button>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 ring-1 ring-neutral-200">
              <Image
                src="/cyberwall-logo.png"
                alt="Cyberwall logo"
                width={25}
                height={22}
                className="h-auto w-full object-contain"
              />
            </span>

            <div className="min-w-0 flex-1 leading-tight">
              <p className="font-nunito truncate text-[11px] font-semibold text-neutral-950">
                CyberWall
              </p>

              <p className="mt-0.5 text-[8px] text-neutral-500">online</p>
            </div>

            <button
              type="button"
              aria-label="More options"
              className="flex h-7 w-7 items-center justify-center text-lg leading-none text-neutral-800"
            >
              ⋮
            </button>
          </div>

          {/* Chat area */}
          <div
            className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[#efeae2] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(239,234,226,0.68), rgba(239,234,226,0.68)), url('/whatsapp-bg.png')",
            }}
          >
            <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden px-2.5 pt-3 pb-2">
              {/* Date marker */}
              <div className="flex justify-center">
                <span className="rounded-md bg-white/95 px-2 py-1 text-[7px] font-medium text-neutral-500 shadow-sm">
                  Today
                </span>
              </div>

              {/* User message */}
              <div className="ml-auto max-w-[88%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-2 shadow-sm">
                <p className="text-[10px] leading-[1.4] text-neutral-800">
                  I got a message saying my parcel is on hold and I have to pay
                  ₹49 to release it. Is this real?
                </p>

                <div className="mt-1 flex items-center justify-end gap-1">
                  <span className="text-[7px] text-neutral-500">10:24</span>
                  <span className="text-[7px] font-semibold text-[#53bdeb]">
                    ✓✓
                  </span>
                </div>
              </div>

              {/* Main Cyberwall reply */}
              <div className="mr-auto max-w-[94%] rounded-lg rounded-tl-none bg-white px-2.5 py-2.5 shadow-sm">
                <p className="text-[10px] text-neutral-800">
                  The link you provided has a trust score of 38 out of 100. This
                  is a low score, which means the website is dangerous and you
                  should not trust it or share any information there.
                </p>

                <p className="mt-2 text-[10px] text-neutral-800">
                  The security system found that the website connection is not
                  secure and it could be hiding malicious content. Because the
                  site could not be fully verified, you should avoid entering
                  any personal data, bank details, or OTPs. Please stay away
                  from this link to keep your information safe.
                </p>

                <p className="mt-1.5 text-right text-[7px] text-neutral-400">
                  10:25
                </p>
              </div>
            </div>

            {/* Message input */}
            <div className="flex shrink-0 items-center gap-1.5 px-2 py-2">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-2.5 py-1.5 shadow-sm">
                <PlusIcon className="h-3 w-3 shrink-0 text-neutral-400" />

                <span className="truncate text-[9px] text-neutral-400">
                  Message
                </span>
              </div>

              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00a884] shadow-sm">
                <MicIcon className="h-3.5 w-3.5 text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
