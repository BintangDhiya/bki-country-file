import Image from "next/image";
import { heroFlags, siteConfig } from "@/data/site-data";

// Flag CDN helper — uses flagcdn.com for crisp flag images
function flagUrl(code: string, width: number = 80): string {
  return `https://flagcdn.com/w${width}/${code.toLowerCase()}.png`;
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full px-8 pt-0 pb-16 flex flex-col gap-0"
      aria-labelledby="hero-heading"
    >
      {/* ── Top row: large headline + flag mosaic ── */}
      <div className="flex items-start justify-between gap-6">
        {/* Headline */}
        <div className="flex flex-col leading-none">
          <h1
            id="hero-heading"
            className="text-[clamp(5rem,14vw,9rem)] font-serif font-normal text-[#0d3b5e] leading-[0.92] tracking-tight select-none"
          >
            Country
          </h1>

          {/* Welcome tag + "File" on the same visual row */}
          <div className="flex items-end gap-4 mt-1">
            {/* Welcome bracket label */}
            <div className="relative border border-[#0d3b5e]/40 rounded-sm px-3 py-2 mb-1">
              {/* Top-left corner tick */}
              <span
                className="absolute -top-px -left-px w-2.5 h-2.5 border-t-2 border-l-2 border-[#0d3b5e]"
                aria-hidden="true"
              />
              <p className="text-[0.6rem] font-semibold tracking-widest uppercase text-[#0d3b5e] leading-snug whitespace-pre-line">
                {siteConfig.tagline}
              </p>
              {/* Bottom-right corner tick */}
              <span
                className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b-2 border-r-2 border-[#0d3b5e]"
                aria-hidden="true"
              />
            </div>

            <h1
              aria-hidden="true"
              className="text-[clamp(4rem,12vw,8rem)] font-serif italic font-light text-[#0d3b5e] leading-[0.92] tracking-tight select-none"
            >
              File
            </h1>
          </div>
        </div>

        {/* Flag mosaic — 2 columns × 3 rows */}
        <div
          className="grid grid-cols-2 gap-2 shrink-0 self-start mt-2"
          aria-label="Featured country flags"
          role="img"
        >
          {heroFlags.map((flag) => (
            <div
              key={flag.flagCode}
              className="relative overflow-hidden rounded-sm shadow-md w-[70px] h-[46px]"
              title={flag.country}
            >
              <Image
                src={flagUrl(flag.flagCode)}
                alt={`${flag.country} flag`}
                fill
                className="object-cover"
                sizes="70px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Sub-headline ── */}
      <div className="mt-14 max-w-lg">
        <p className="text-[clamp(1.6rem,5vw,2.4rem)] font-serif font-normal text-[#0d3b5e] leading-tight">
          Starts <strong className="font-bold">from here</strong>
        </p>
        <p className="mt-3 text-sm text-[#0d3b5e]/70 leading-relaxed max-w-xs">
          This platform compiles a comprehensive collection of technical
          references related to ship and offshore engineering surveys
        </p>
      </div>
    </section>
  );
}
