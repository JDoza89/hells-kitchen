import type { StoryblokBlok } from "@/lib/storyblok";
import PlpQuoteChip from "./PlpQuoteChip";

type Blok = StoryblokBlok & {
  title?: string;
  body?: string;
  quote_chip?: StoryblokBlok;
};

export default function PlpInbox({ blok }: { blok: Blok }) {
  return (
    <section className="px-6 md:px-12 py-20 bg-ink text-plaster">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm tracking-[0.2em] uppercase text-copper-light mb-8">
          {blok.title}
        </h2>
        {blok.quote_chip ? (
          <PlpQuoteChip blok={blok.quote_chip} />
        ) : (
          <p className="font-serif text-2xl md:text-3xl leading-relaxed italic">
            {blok.body}
          </p>
        )}
      </div>
    </section>
  );
}
