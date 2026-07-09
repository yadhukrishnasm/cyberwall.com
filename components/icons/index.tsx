import type { SVGProps } from "react";

// Custom line-icon set — 24x24 viewBox, stroke-based, single weight.
// Every icon takes the same props as a plain <svg>, so size/color are
// controlled via className (e.g. "h-5 w-5 text-neutral-500").
type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

// Brand logomarks (filled, not stroke) — path data from Simple Icons
// (CC0), since a hand-drawn stroke glyph doesn't read as the real logo.
function BrandIcon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      {children}
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </BrandIcon>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </BrandIcon>
  );
}

export function SmartphoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </Icon>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 12 5.5a3.5 3.5 0 0 1 5 5l-1 1" />
      <path d="M13 17.5 12 18.5a3.5 3.5 0 0 1-5-5l1-1" />
    </Icon>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 20 7v10l-8 4-8-4V7Z" />
      <path d="M4 7 12 11l8-4" />
      <path d="M12 11v10" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Icon>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 5.5h16v10H9.5L5 19v-3.5H4Z" />
    </Icon>
  );
}

export function LandmarkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 21h16" />
      <path d="M5 21v-8M9.5 21v-8M14.5 21v-8M19 21v-8" />
      <path d="M3 10 12 4l9 6Z" />
    </Icon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 3.5h3l1.2 4-2 1.5a10 10 0 0 0 6.8 6.8l1.5-2 4 1.2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.7 2 2 0 0 1 6 3.5Z" />
    </Icon>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 14a8 8 0 1 1 16 0" />
      <path d="M12 14 15.2 9.6" />
      <path d="M4 14h1M19 14h1M12 5v1" />
    </Icon>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5 5 6v6c0 4.4 3 7.5 7 8.5 4-1 7-4.1 7-8.5V6Z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 3.5h7l3 3v14H7Z" />
      <path d="M14 3.5v3h3" />
      <path d="M9.5 13h5M9.5 16h5" />
    </Icon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6 18 18M18 6 6 18" />
    </Icon>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 5.5v13l11-6.5Z" />
    </Icon>
  );
}

export function MicIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="9" y="3.5" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5v3M9 20.5h6" />
    </Icon>
  );
}

export function TypeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 6.5h14M12 6.5v11M9.5 17.5h5" />
    </Icon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.2 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.2-3.7-8.5S9.6 5.8 12 3.5Z" />
    </Icon>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4 17 5-5 4 4 3-3 4 4" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </Icon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </Icon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </Icon>
  );
}
