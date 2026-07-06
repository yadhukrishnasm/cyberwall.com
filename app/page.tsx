import AccessChannels from "@/components/sections/access-channels";
import Checks from "@/components/sections/checks";
import CtaBanner from "@/components/sections/cta-banner";
import FaqPreview from "@/components/sections/faq-preview";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Response from "@/components/sections/response";
import Stats from "@/components/sections/stats";
import { Navbar } from "@/components/structure/navbar";
import { StructuredData } from "@/components/structured-data";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={WEBSITE_JSON_LD} />
      <Navbar />
      <main>
        <Hero />
        <AccessChannels />
        <Response />
        <Checks />
        <Stats />
        <FaqPreview />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
