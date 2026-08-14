"use client";

import Link from "next/link";
import {
  brands,
  contactInfo,
  footerLinks,
  socialLinks,
} from "@/data/site-data";
import { motion } from "motion/react";

// ── Inline SVG social icons ──────────────────────────────────────────────────

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
};

export function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* ── Main footer content ── */}
      <div className="px-8 pb-10 pt-16 flex items-end justify-between gap-8">
        {/* Left: large tagline + logos */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-[clamp(3rem,10vw,5.5rem)] font-serif font-normal text-[#0d3b5e] leading-none tracking-tight select-none"
            aria-label="Make your mark"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Make <em className="italic font-light">your</em>
            <br />
            <span className="opacity-20 text-[clamp(3.5rem,11vw,6.5rem)]">
              mark
            </span>
          </motion.p>

          {/* Brand logos row */}
          <div className="flex items-center gap-4">
            {brands.map((brand) =>
              brand.name === "IDSurvey" ? (
                <div
                  key={brand.name}
                  className="flex items-center gap-1 text-[#1a5276]"
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
                  <span className="text-sm font-bold tracking-wide">
                    IDSurvey
                  </span>
                </div>
              ) : (
                <span
                  key={brand.name}
                  className="text-xs font-extrabold border-2 border-[#1a5276] text-[#1a5276] rounded-sm px-1.5 py-0.5 leading-tight"
                >
                  bki
                  <sup className="text-[7px] align-super">®</sup>
                </span>
              )
            )}
          </div>
        </div>

        {/* Right: contact info + social icons */}
        <div className="flex flex-col gap-5 items-start text-[#0d3b5e] text-sm">
          {/* Email & Phone */}
          <div className="leading-relaxed">
            <p className="font-medium">{contactInfo.email}</p>
            <p>{contactInfo.phone}</p>
          </div>

          {/* Address */}
          <div className="leading-relaxed">
            <p>{contactInfo.address.street}</p>
            <p>{contactInfo.address.city}</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  id={`social-${social.platform.toLowerCase()}`}
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="size-8 rounded-full border border-[#0d3b5e]/40 flex items-center justify-center text-[#0d3b5e] hover:bg-[#0d3b5e] hover:text-white transition-colors duration-200"
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#0d3b5e]/10 px-8 py-3 flex items-center justify-between">
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs text-[#0d3b5e]/60 hover:text-[#0d3b5e] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-[#0d3b5e]/40">Designed with Canva</p>
      </div>
    </footer>
  );
}
