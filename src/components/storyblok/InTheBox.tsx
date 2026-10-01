import Image from "next/image";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { StoryblokAsset, StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  headline?: string;
  flatlay?: StoryblokAsset;
  items?: StoryblokBlok[];
};

export default function InTheBox({ blok }: { blok: Blok }) {
  const items = blok.items ?? [];
  const flatlay = blok.flatlay?.filename;

  return (
    <section className="px-6 md:px-12 py-20 bg-stone/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          {blok.headline && (
            <h2 className="font-serif text-3xl md:text-5xl text-ink">{blok.headline}</h2>
          )}
          <ul className="mt-8" aria-label={blok.headline}>
            {items.map((item) => (
              <StoryblokServerComponent blok={item} key={item._uid} />
            ))}
          </ul>
        </div>
        {flatlay && (
          <div className="relative aspect-[4/3] overflow-hidden border border-ink/10">
            <Image
              src={flatlay}
              alt={blok.flatlay?.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
