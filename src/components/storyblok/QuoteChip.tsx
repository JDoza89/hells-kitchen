import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  name?: string;
  quote?: string;
  stars?: string;
};

function StarRow({ count }: { count: number }) {
  const n = Math.min(5, Math.max(0, Math.round(count)));
  return (
    <span className="text-star-gold text-sm tracking-widest" aria-hidden>
      {"★".repeat(n)}
      <span className="text-ink/20">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function QuoteChip({ blok }: { blok: Blok }) {
  const stars = Number.parseInt(blok.stars ?? "5", 10);

  return (
    <figure className="min-w-[200px] flex-1 border border-ink/10 bg-stone/40 px-5 py-4">
      <StarRow count={stars} />
      {blok.quote && (
        <blockquote className="mt-3 font-serif text-lg text-ink leading-snug">
          &ldquo;{blok.quote}&rdquo;
        </blockquote>
      )}
      {blok.name && (
        <figcaption className="mt-2 text-sm text-ink/60">{blok.name}</figcaption>
      )}
    </figure>
  );
}
