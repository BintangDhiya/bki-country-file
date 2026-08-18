"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { heroFlags, siteConfig } from "@/data/site-data";

// Shared ease
const EASE = [0.25, 0.1, 0.25, 1] as const;

// Reusable slide-up variant
const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

// Flag CDN helper — uses flagcdn.com for crisp flag images
function flagUrl(code: string, width: number = 80): string {
  return `https://flagcdn.com/w${width}/${code.toLowerCase()}.png`;
}


export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full px-8 pt-0 pb-16 flex flex-col justify-between min-h-[calc(100vh-theme(spacing.20))]"
      aria-labelledby="hero-heading"
    >
      {/* ── Top row: large headline + flag mosaic ── */}
      <div className="flex items-start justify-between gap-6">
        {/* Headline */}
        <div className="flex flex-col leading-none overflow-hidden">
          {/* "Country" — slides in from left */}
          <motion.h1
            id="hero-heading"
            className="text-[clamp(5rem,14vw,9rem)] font-serif font-normal text-[#0d3b5e] leading-[0.92] tracking-tight select-none"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            Country
          </motion.h1>

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

            {/* "File" — slides in from left, slightly after "Country" */}
            <motion.h1
              aria-hidden="true"
              className="text-[clamp(4rem,12vw,8rem)] font-serif italic font-light text-[#0d3b5e] leading-[0.92] tracking-tight select-none"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            >
              File
            </motion.h1>
          </div>
        </div>

        {/* Flag mosaic — 2 columns × 3 rows, each flag slides from right sequentially */}
        <div
          className="grid grid-cols-2 gap-2 shrink-0 self-center mt-2"
          aria-label="Featured country flags"
          role="img"
        >
          {heroFlags.map((flag, index) => (
            <motion.div
              key={flag.flagCode}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: EASE,
                delay: 0.3 + index * 0.1,
              }}
            >
              <Link
                href={flag.href}
                title={flag.country}
                aria-label={`Go to ${flag.country} country file`}
                className="relative overflow-hidden shadow-md w-[90px] h-[60px] block transition-transform duration-150 hover:scale-105"
              >
                <Image
                  src={flagUrl(flag.flagCode)}
                  alt={`${flag.country} flag`}
                  fill
                  className="object-cover"
                  sizes="90px"
                  unoptimized
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Sub-headline ── */}
      <div className="max-w-lg overflow-hidden">
        <motion.p
          className="text-[clamp(1.6rem,5vw,2.4rem)] font-serif font-normal text-[#0d3b5e] leading-tight"
          {...slideUp(0.5)}
        >
          Starts <strong className="font-bold">from here</strong>
        </motion.p>
        <motion.p
          className="mt-3 text-sm text-[#0d3b5e]/70 leading-relaxed max-w-xs"
          {...slideUp(0.65)}
        >
          This platform compiles a comprehensive collection of technical
          references related to ship and offshore engineering surveys
        </motion.p>
      </div>
    </section>
  );
}
