"use client";

import Link from "next/link";
import type { LandingPageContent } from "@/lib/storyblok/types";
import { isTeaserBarVisible } from "@/lib/storyblok/i18n-fields";
export default function StickyTeaser({ blok }: { blok: LandingPageContent }) {
  if (!isTeaserBarVisible(blok.teaser_start, blok.launch_date)) {
    return null;
  }

  const message = blok.teaser_message;
  const ctaLabel = blok.teaser_cta_label;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-ink text-plaster px-4 py-3 shadow-lg"
      role="region"
      aria-label="Launch teaser"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
        {message && <p className="text-center">{message}</p>}
        {ctaLabel && (
          <Link
            href="#waitlist"
            className="bg-plaster text-ink px-4 py-1.5 text-xs tracking-wide hover:bg-stone transition-colors"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
