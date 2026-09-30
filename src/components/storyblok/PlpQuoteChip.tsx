import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  quote?: string;
  attribution?: string;
};

export default function PlpQuoteChip({ blok }: { blok: Blok }) {
  return (
    <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed">
      <p className="italic">&ldquo;{blok.quote}&rdquo;</p>
      {blok.attribution && (
        <footer className="mt-4 text-sm not-italic text-copper-light tracking-wide">
          — {blok.attribution}
        </footer>
      )}
    </blockquote>
  );
}
