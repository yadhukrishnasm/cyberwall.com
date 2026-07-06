import {
  LandmarkIcon,
  LinkIcon,
  MailIcon,
  MessageIcon,
  PackageIcon,
  PhoneIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { CollageTile } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

// Spans are chosen so each row adds up exactly (2+1+1 / 1+1+2 = 4
// columns), and wraps to (2 / 1+1 / 1+1 / 2 = 2 columns) on mobile —
// a gapless mosaic at every width, not just desktop.
const INPUT_TYPES = [
  {
    name: "URLs",
    icon: LinkIcon,
    description: "Domain age, reputation, blacklists, TLD analysis.",
    tint: 1,
    span: 2,
  },
  {
    name: "APK Files",
    icon: PackageIcon,
    description: "Permissions, Play Store match, hidden behaviors.",
    tint: 2,
    span: 1,
  },
  {
    name: "Emails",
    icon: MailIcon,
    description: "Mail server validity, blacklist match.",
    tint: 3,
    span: 1,
  },
  {
    name: "SMS",
    icon: MessageIcon,
    description: "TRAI DLT registry, semantic scam intent.",
    tint: 3,
    span: 1,
  },
  {
    name: "Bank Accounts",
    icon: LandmarkIcon,
    description: "Cross-reference against police databases.",
    tint: 2,
    span: 1,
  },
  {
    name: "Phone Numbers",
    icon: PhoneIcon,
    description: "Reported scam number lookup.",
    tint: 1,
    span: 2,
  },
] as const;

const SOURCES = [
  "OpenAI Scam Detection",
  "1 Lakh+ Case Records",
  "Tranco Web Reputation",
  "Play Store Verification",
  "TRAI SMS Registry",
  "WhoIs Domain Age",
  "Gov & Bank Whitelists",
  "Global Threat Intel",
];

export default function Checks() {
  return (
    <section id="engine" className="border-t border-neutral-200 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engine"
            title="6 input types. 40+ security checks."
            description="Deep, authoritative integrations for instant verification."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 auto-rows-[13rem] overflow-hidden rounded-2xl border border-neutral-200 md:grid-cols-4 md:auto-rows-[15rem]">
          {INPUT_TYPES.map((type, i) => (
            <Reveal
              key={type.name}
              delay={i * 60}
              className={type.span === 2 ? "col-span-2" : "col-span-1"}
            >
              {/* Media slot — replace the icon/tint block inside
                  CollageTile with the working-prototype GIF for this
                  check type when it's ready. */}
              <CollageTile
                icon={type.icon}
                tint={type.tint}
                title={type.name}
                description={type.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>

      <Reveal delay={200}>
        <div className="mt-16 overflow-hidden border-y border-neutral-200 py-5">
          <p className="mb-4 text-center text-xs tracking-wide text-neutral-400 uppercase">
            Powered by
          </p>
          <div className="marquee">
            <div className="marquee-track">
              {[...SOURCES, ...SOURCES].map((source, i) => (
                <span
                  key={`${source}-${i}`}
                  className="mx-6 text-sm whitespace-nowrap text-neutral-500"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
