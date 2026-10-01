import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  headline?: string;
  body?: string;
  layers?: StoryblokBlok[];
  diagram?: { filename?: string; alt?: string };
};

export default function MaterialStory({ blok }: { blok: Blok }) {
  const layers = blok.layers ?? [];

  return (
    <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <div>
        {blok.headline && (
          <h2 className="font-serif text-3xl md:text-5xl text-ink">{blok.headline}</h2>
        )}
        {blok.body && (
          <p className="mt-6 text-base md:text-lg text-ink/75 leading-relaxed whitespace-pre-line">
            {blok.body}
          </p>
        )}
        {layers.length > 0 && (
          <ul className="mt-8 space-y-2">
            {layers.map((layer) => (
              <StoryblokServerComponent blok={layer} key={layer._uid} />
            ))}
          </ul>
        )}
      </div>
      {blok.diagram?.filename && (
        <div className="relative aspect-square bg-stone/60 border border-ink/10">
          {/* diagram asset when present in CMS */}
        </div>
      )}
    </section>
  );
}
