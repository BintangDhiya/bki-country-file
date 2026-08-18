import Link from "next/link";
import { notFound } from "next/navigation";
import { Home } from "lucide-react";
import { countries } from "@/data/site-data";

// --- Helpers ----------------------------------------------------------------

/** Convert a slug like "timor-leste" to "Timor Leste" */
function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// --- Static params ----------------------------------------------------------

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.id }));
}

// --- Metadata ---------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const title = slugToTitle(country);
  return {
    title: `${title} - BKI Country File`,
    description: `Flag state instructions, ratification of conventions, cooperation agreements, and contacts for ${title}.`,
  };
}

// --- Menu items -------------------------------------------------------------

interface MenuItem {
  id: string;
  label: string;
  slug: string;
  accent: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: "instruction",
    label: `FLAG STATE INSTRUCTION`,
    slug: "instruction",
    accent: "#00d4d4",
    image: "/images/flag-state.jpg"
  },
  {
    id: "ratification",
    label: "RATIFICATION OF CONVENTIONS",
    slug: "ratification",
    accent: "#e91e8c",
    image: "/images/ratification.jpg"
  },
  {
    id: "cooperation",
    label: "COOPERATION AGREEMENT",
    slug: "agreement",
    accent: "#e91e8c",
    image: "/images/cooperation.jpg"
  },
  {
    id: "contact",
    label: "LIST OF CONTACTS",
    slug: "contact",
    accent: "#00d4d4",
    image: "/images/contact.jpg"
  },
];

// --- Page -------------------------------------------------------------------

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  const known = countries.find((c) => c.id === country);
  if (!known) notFound();

  const title = slugToTitle(country);

  const leftItems = menuItems.slice(0, 3);
  const rightItem = menuItems[3];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="flex items-start justify-between px-10 pt-8 pb-4">
        <Link
          href="/"
          id="home-link"
          aria-label="Return to home"
          className="text-white hover:text-[#00d4d4] transition-colors duration-200"
        >
          <Home className="size-7 stroke-[1.5]" aria-hidden="true" />
        </Link>

        <nav className="flex items-center gap-5" aria-label="Brand links">
          <a
            href="https://idsurvey.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:opacity-70 transition-opacity text-sm font-semibold"
            aria-label="IDSurvey"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="font-bold">IDSurvey</span>
          </a>
          <a
            href="https://bki.co.id"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-xs tracking-tight border-2 border-white rounded-sm px-1.5 py-0.5 text-white hover:opacity-70 transition-opacity"
            aria-label="BKI"
          >
            bki<sup className="text-[8px] align-super">r</sup>
          </a>
        </nav>
      </header>

      {/* Dynamic title */}
      <div className="px-10 pb-10">
        <h1 className="text-8xl font-extrabold text-[#00d4d4] leading-tight tracking-tight">
          {title}
        </h1>
      </div>

      {/* Menu grid */}
      <main
        id="country-menu"
        className="px-10 pb-16 flex justify-center"
        aria-label={`${title} menu`}
      >
        <div className="flex gap-3 w-full max-w-xl">
          <div className="flex flex-col gap-3 flex-1">
            {leftItems.map((item) => (
              <MenuCard key={item.id} item={item} country={country} />
            ))}
          </div>
          <div className="w-[30%]">
            <MenuCard item={rightItem} country={country} tall />
          </div>
        </div>
      </main>
    </div>
  );
}

// --- MenuCard ---------------------------------------------------------------

interface MenuCardProps {
  item: MenuItem;
  country: string;
  tall?: boolean;
}

function MenuCard({ item, country, tall = false }: MenuCardProps) {
  return (
    <Link
      id={`menu-${item.id}`}
      href={`/${country}/${item.slug}`}
      aria-label={`${item.label}`}
      className={[
        "group relative block overflow-hidden",
        tall ? "h-full min-h-[296px]" : "h-[140px]",
        "transition-transform duration-200 hover:scale-[1.02] hover:brightness-110",
      ].join(" ")}
    >
      {/* Background image — fill in src manually */}
      <img
        src={item.image || ""}
        alt={`${item.label} background`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-200" />

      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white font-bold w-1/2 text-sm tracking-widest text-center leading-snug drop-shadow-lg">
          {item.label}
        </p>
      </div>
    </Link>
  );
}