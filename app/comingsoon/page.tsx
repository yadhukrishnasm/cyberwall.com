import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 text-center">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-20 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-tint-cyan/35 blur-[70px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute top-16 right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-tint-blue/60 blur-[80px] sm:blur-[110px] lg:blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-brand/5 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white py-1.5 pr-4 pl-2 shadow-sm shadow-neutral-950/5">
          <Image
            src="/cyberwall-logo.png"
            alt="Cyberwall logo"
            width={28}
            height={24}
            className="w-auto"
          />
          <span className="font-nunito text-xs font-semibold text-neutral-700 sm:text-sm">
            Cyberwall
          </span>
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl font-nunito text-5xl leading-[0.98] font-bold tracking-[-0.045em] text-neutral-950 sm:text-6xl md:text-7xl">
          <span className="text-brand-gradient">Coming</span> soon.
        </h1>

        <p className="mx-auto mt-5 max-w-xl font-nunito text-lg leading-relaxed font-semibold text-neutral-700 sm:text-xl">
          We&apos;re building something to help you stay safe online.
        </p>

        <p className="mx-auto  max-w-xl text-base leading-relaxed text-neutral-500 sm:text-md">
          A kerala police initiative.
        </p>
      </div>
    </main>
  );
}
