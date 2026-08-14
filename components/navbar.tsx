import Link from "next/link";
import { brands } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="w-full flex justify-end items-center px-8 py-20">
      <nav className="flex items-center gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={brand.href}
            className={cn(
              "text-sm font-semibold tracking-wide transition-opacity hover:opacity-70",
              brand.name === "IDSurvey"
                ? "text-[#1a5276] flex items-center gap-1"
                : "text-[#1a5276]"
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={brand.name}
          >
            {brand.name === "IDSurvey" ? (
              <span className="flex items-center gap-1">
                {/* Magnifying-glass icon inline with IDSurvey */}
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
                <span className="font-bold">{brand.logoText}</span>
              </span>
            ) : (
              <span className="font-extrabold text-base tracking-tight border-2 border-[#1a5276] rounded-sm px-1.5 py-0.5 text-xs leading-tight">
                {brand.logoText}
                <sup className="text-[8px] align-super">®</sup>
              </span>
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
}
