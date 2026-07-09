import Image from "next/image";
import { MicIcon, PlusIcon } from "@/components/icons";

// Placeholder phone frame styled as a real WhatsApp chat with the
// Cyberwall bot — swap the chat area for the actual product capture
// when it's ready. Everything here is CSS, no images.
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-56 sm:w-64">
      <div className="aspect-[9/19] overflow-hidden rounded-[2.5rem] border-8 border-neutral-950 bg-neutral-950 shadow-2xl shadow-brand/20">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.75rem]">
          {/* WhatsApp header */}
          <div className="flex items-center gap-2 bg-whatsapp-deep px-3 pt-6 pb-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1">
              <Image
                src="/cyberwall-logo.png"
                alt="Cyberwall logo"
                width={20}
                height={18}
              />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="font-nohemi truncate text-xs font-semibold text-white">
                Cyberwall
              </p>
              <p className="text-[9px] text-white/70">online</p>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex flex-1 flex-col gap-2 bg-wa-chat p-2.5">
            {/* outgoing (user forwards a message) */}
            <div className="ml-auto max-w-[88%] rounded-lg rounded-tr-none bg-wa-bubble px-2.5 py-1.5 shadow-sm">
              <p className="border-l-2 border-whatsapp-deep/40 pl-1.5 text-[9px] text-neutral-500 italic">
                Forwarded
              </p>
              <p className="mt-1 text-[10px] leading-snug text-neutral-800">
                Your parcel is on hold. Pay ₹49 at kerala-post.win to release
                it.
              </p>
              <p className="mt-0.5 text-right text-[8px] text-neutral-400">
                10:24 ✓✓
              </p>
            </div>

            {/* incoming (bot reply) */}
            <div className="max-w-[88%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">
              <p className="text-[10px] leading-snug text-neutral-800">
                Checking the link, sender and scam reports…
              </p>
              <p className="mt-0.5 text-right text-[8px] text-neutral-400">
                10:24
              </p>
            </div>

            <div className="max-w-[88%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">
              <div className="rounded-md border border-flow-red-border/40 bg-flow-red-bg px-2 py-1.5">
                <p className="font-nohemi text-[10px] font-bold text-neutral-950">
                  18/100 · High Risk
                </p>
                <p className="mt-0.5 text-[9px] leading-snug text-neutral-600">
                  Do not pay. This domain was registered 2 days ago and
                  matches reported scams.
                </p>
              </div>
              <p className="mt-1 text-[10px] leading-snug text-neutral-800">
                Block the sender and report it on 1930 if contacted again.
              </p>
              <p className="mt-0.5 text-right text-[8px] text-neutral-400">
                10:25
              </p>
            </div>

            {/* input bar */}
            <div className="mt-auto flex items-center gap-1.5">
              <div className="flex flex-1 items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5">
                <PlusIcon className="h-3 w-3 text-neutral-400" />
                <span className="text-[10px] text-neutral-400">Message</span>
              </div>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-whatsapp">
                <MicIcon className="h-3 w-3 text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
