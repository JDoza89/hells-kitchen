import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  rating_label?: string;
  rating_value?: string;
  quotes?: StoryblokBlok[];
};

export default function ProofStrip({ blok }: { blok: Blok }) {
  const quotes = blok.quotes ?? [];

  return (
    <section className="border-y border-ink/10 bg-stone/50 px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          {blok.rating_value && (
            <p className="font-serif text-4xl text-ink tabular-nums">
              <span className="text-star-gold">★</span> {blok.rating_value}
            </p>
          )}
          {blok.rating_label && (
            <p className="text-sm text-ink/60">{blok.rating_label}</p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {quotes.map((quote) => (
            <StoryblokServerComponent blok={quote} key={quote._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
