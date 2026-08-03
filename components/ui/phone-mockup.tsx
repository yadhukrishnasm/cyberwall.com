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
                  Is this SBI KYC message genuine? - Dear Customer, your SBI account KYC will expire today. Update immediately at sbi-kycverify.in or your account will be suspended. For help call +91 8xxxx xxxx7
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
                  This message is a scam and you should definitely not interact with it. The website link you were sent has a trust score of 18 out of 100, which is very low and indicates it is dangerous. The site is not secure, has unknown origins, and is likely trying to steal your personal or banking information.

                </p>

                <p className="mt-2 text-[10px] text-neutral-800">
                  Please do not click the link, do not enter any details, and do not call the phone number provided. Banks like SBI will never ask you to update your KYC through an unofficial website link sent via text message.

                </p>
                <p className="mt-2 text-[10px] text-neutral-800">
                  If you have already entered any information on that site, please call your bank immediately to block your account and card. Also, call the national cybercrime helpline at 1930 and report the incident at cybercrime.gov.in. You can use the /report command here for more official reporting contacts.
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
