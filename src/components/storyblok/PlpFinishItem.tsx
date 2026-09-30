"use client";

import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  name?: string;
  slug?: string;
  swatch_color?: string;
};

type Props = {
  blok: Blok;
  selected?: boolean;
  onSelect?: (slug: string) => void;
};

export default function PlpFinishItem({ blok, selected, onSelect }: Props) {
  const slug = blok.slug ?? blok._uid;

  return (
    <button
      type="button"
      onClick={() => onSelect?.(slug)}
      className={`flex flex-col items-center gap-3 p-4 border transition-colors ${
        selected ? "border-copper bg-copper/5" : "border-ink/10 hover:border-copper/50"
      }`}
      aria-pressed={selected}
    >
      <span
        className="w-12 h-12 rounded-full border border-ink/10 shadow-inner"
        style={{ backgroundColor: blok.swatch_color ?? "#8A9199" }}
      />
      <span className="text-sm tracking-wide">{blok.name}</span>
    </button>
  );
}
