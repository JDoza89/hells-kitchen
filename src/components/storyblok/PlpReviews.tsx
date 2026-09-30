import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  title?: string;
  items?: StoryblokBlok[];
};

export default function PlpReviews({ blok }: { blok: Blok }) {
  const items = blok.items ?? [];

  return (
    <section className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
      <h2 className="font-serif text-4xl text-center text-ink mb-16">{blok.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <StoryblokServerComponent blok={item} key={item._uid} />
        ))}
      </div>
    </section>
  );
}
