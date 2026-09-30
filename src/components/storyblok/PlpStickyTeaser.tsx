"use client";

import Link from "next/link";
import { isStickyTeaserVisible } from "@/lib/design";
import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  message?: string;
  cta_label?: string;
  cta_anchor?: string;
};

export default function PlpStickyTeaser({ blok }: { blok: Blok }) {
  if (!isStickyTeaserVisible()) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-ink text-plaster px-4 py-3 shadow-lg"
      role="region"
      aria-label="Announcement"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
        <p className="text-center">{blok.message}</p>
        {blok.cta_label && blok.cta_anchor && (
          <Link
            href={blok.cta_anchor}
            className="border border-copper text-copper-light px-4 py-1.5 text-xs tracking-[0.15em] uppercase hover:bg-copper hover:text-plaster transition-colors"
          >
            {blok.cta_label}
          </Link>
        )}
      </div>
    </div>
  );
}
