"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { countries, type Country, type CountryVariant } from "@/data/site-data";
import { ArrowRight } from "lucide-react";

// Variant style mapping matching the design screenshot
const variantStyles: Record<CountryVariant, string> = {
  dark: "bg-[#1a1a1a] text-white border-[#1a1a1a] hover:bg-[#333] hover:border-[#333]",
  teal: "bg-[#2a8a8a] text-white border-[#2a8a8a] hover:bg-[#1e7070] hover:border-[#1e7070]",
  outline:
    "bg-transparent text-[#0d3b5e] border-[#0d3b5e]/30 hover:bg-[#0d3b5e]/5 hover:border-[#0d3b5e]/60",
};

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface CountryButtonProps {
  country: Country;
  index: number;
}

function CountryButton({ country, index }: CountryButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.1 + index * 0.08 }}
    >
      <Link
        id={`country-btn-${country.id}`}
        href={country.href}
        className={cn(
          "group flex items-center justify-between gap-3 px-6 py-3 rounded-full border transition-all duration-200",
          "text-sm font-medium tracking-wide",
          variantStyles[country.variant]
        )}
        aria-label={`Go to ${country.name} country file`}
      >
        <span>{country.name}</span>
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}

export function CountryButtons() {
  return (
    <section
      id="countries"
      className="w-full px-8 pb-16"
      aria-labelledby="countries-heading"
    >
      <h2 id="countries-heading" className="sr-only">
        Available Countries
      </h2>

      {/* 3-column grid, 2 rows — matches screenshot layout */}
      <div className="grid grid-cols-3 gap-4">
        {countries.map((country, index) => (
          <CountryButton key={country.id} country={country} index={index} />
        ))}
      </div>
    </section>
  );
}
