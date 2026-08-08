import { CyberwallInterceptionStory } from "@/components/sections/cyberwall-intersection";
import Emergency from "@/components/sections/emergency";
import FaqPreview from "@/components/sections/faq-preview";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import HowCyberwallWorks from "@/components/sections/how-cyberwall-works";
import ScamsScaling from "@/components/sections/scams-scaling";
import TrustRibbon from "@/components/sections/trust-ribbon";
import VerifyChannels from "@/components/sections/verify-channels";
import WhatCanISend from "@/components/sections/what-can-i-send";
import WhyCyberwall from "@/components/sections/why-cyberwall";
import { Navbar } from "@/components/structure/navbar";
import { headers } from "next/headers";
import { StructuredData } from "@/components/structured-data";
import { PlatformModal } from "@/components/ui/platform-modal";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
};

export default async function HomePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <>
      <StructuredData data={WEBSITE_JSON_LD} nonce={nonce} />
      <Navbar />
      <main>
        <Hero />
        <TrustRibbon />
        <WhyCyberwall />
        <CyberwallInterceptionStory />
        <WhatCanISend />
        <VerifyChannels />
        <HowCyberwallWorks />
        <ScamsScaling />
        <Emergency />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
      <PlatformModal />
    </>
  );
}
