// ─── Site-wide data ────────────────────────────────────────────────────────
// All content is kept here so it can easily be swapped for an API call later.

export const siteConfig = {
  title: "BKI Country File",
  description:
    "BKI Country File — a comprehensive platform that compiles technical references related to ship and offshore engineering surveys.",
  tagline: "WELCOME\nTO BKI SYSTEM",
} as const;

// ─── Navigation / Brand ────────────────────────────────────────────────────

export const brands = [
  { name: "IDSurvey", href: "https://idsurvey.id", logoText: "IDSurvey" },
  { name: "BKI", href: "https://bki.co.id", logoText: "bki" },
] as const;

// ─── Countries ─────────────────────────────────────────────────────────────

export type CountryVariant = "dark" | "teal" | "outline";

export interface Country {
  id: string;
  name: string;
  flagEmoji: string;
  href: string;
  variant: CountryVariant;
  flagCode: string; // ISO 3166-1 alpha-2
}

export const countries: Country[] = [
  {
    id: "indonesia",
    name: "Indonesia",
    flagEmoji: "🇮🇩",
    href: "/countries/indonesia",
    variant: "dark",
    flagCode: "ID",
  },
  {
    id: "timor-leste",
    name: "Timor Leste",
    flagEmoji: "🇹🇱",
    href: "/countries/timor-leste",
    variant: "outline",
    flagCode: "TL",
  },
  {
    id: "mongolia",
    name: "Mongolia",
    flagEmoji: "🇲🇳",
    href: "/countries/mongolia",
    variant: "outline",
    flagCode: "MN",
  },
  {
    id: "nauru",
    name: "Nauru",
    flagEmoji: "🇳🇷",
    href: "/countries/nauru",
    variant: "outline",
    flagCode: "NR",
  },
  {
    id: "panama",
    name: "Panama",
    flagEmoji: "🇵🇦",
    href: "/countries/panama",
    variant: "teal",
    flagCode: "PA",
  },
  {
    id: "china",
    name: "China",
    flagEmoji: "🇨🇳",
    href: "/countries/china",
    variant: "teal",
    flagCode: "CN",
  },
];

// ─── Hero Flag Grid ─────────────────────────────────────────────────────────
// Displayed in the 3×2 mosaic next to the headline

export const heroFlags = [
  { country: "Indonesia", flagCode: "ID", flagEmoji: "🇮🇩" },
  { country: "Timor Leste", flagCode: "TL", flagEmoji: "🇹🇱" },
  { country: "Panama", flagCode: "PA", flagEmoji: "🇵🇦" },
  { country: "Nauru", flagCode: "NR", flagEmoji: "🇳🇷" },
  { country: "China", flagCode: "CN", flagEmoji: "🇨🇳" },
  { country: "Mongolia", flagCode: "MN", flagEmoji: "🇲🇳" },
];

// ─── Contact ────────────────────────────────────────────────────────────────

export const contactInfo = {
  email: "ho@bki.co.id",
  phone: "(+62)21 430 1017",
  address: {
    street: "Jl. Yos Sudarso 38-40,",
    city: "Tanjung Priok, Jakarta - 14320",
  },
};

// ─── Social Links ───────────────────────────────────────────────────────────

export const socialLinks = [
  { platform: "Facebook", href: "https://facebook.com/bki", icon: "facebook" },
  { platform: "Twitter", href: "https://twitter.com/bki", icon: "twitter" },
  { platform: "Instagram", href: "https://instagram.com/bki", icon: "instagram" },
] as const;

// ─── Footer Links ───────────────────────────────────────────────────────────

export const footerLinks = [
  { label: "Terms & Support", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;
