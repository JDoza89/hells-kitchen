import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  body?: string;
  stars?: string;
  reviewer_name?: string;
};

export default function ReviewItem({ blok }: { blok: Blok }) {
  const stars = Number.parseInt(blok.stars ?? "5", 10);
  const filled = Math.min(5, Math.max(0, Math.round(stars)));

  return (
    <figure className="border border-ink/10 bg-plaster p-8 h-full flex flex-col">
      <div className="text-star-gold text-sm tracking-widest" aria-label={`${filled} stars`}>
        {"★".repeat(filled)}
        <span className="text-ink/15">{"★".repeat(5 - filled)}</span>
      </div>
      {blok.body && (
        <blockquote className="mt-4 font-serif text-lg text-ink leading-relaxed flex-1">
          {blok.body}
        </blockquote>
      )}
      {blok.reviewer_name && (
        <figcaption className="mt-4 text-sm text-ink/60">{blok.reviewer_name}</figcaption>
      )}
    </figure>
  );
}
