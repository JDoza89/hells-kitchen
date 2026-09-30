import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  title?: string;
  items?: StoryblokBlok[];
};

export default function PlpBenefits({ blok }: { blok: Blok }) {
  const items = blok.items ?? [];

  return (
    <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-center text-ink mb-16">
        {blok.title}
      </h2>
      <ul className="grid md:grid-cols-3 gap-12 md:gap-8">
        {items.map((item) => (
          <StoryblokServerComponent blok={item} key={item._uid} />
        ))}
      </ul>
    </section>
  );
}
