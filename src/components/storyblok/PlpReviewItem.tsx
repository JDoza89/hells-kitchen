import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  quote?: string;
  author?: string;
  rating?: number;
};

export default function PlpReviewItem({ blok }: { blok: Blok }) {
  const rating = blok.rating ?? 5;

  return (
    <figure className="border border-ink/10 p-8 bg-white/30">
      <div className="text-copper text-sm mb-4" aria-label={`${rating} stars`}>
        {"★".repeat(Math.min(5, rating))}
      </div>
      <blockquote className="font-serif text-xl leading-relaxed text-ink">
        &ldquo;{blok.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm text-ink-muted tracking-wide">
        {blok.author}
      </figcaption>
    </figure>
  );
}
