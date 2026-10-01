import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  headline?: string;
  items?: StoryblokBlok[];
};

export default function Reviews({ blok }: { blok: Blok }) {
  const items = blok.items ?? [];

  return (
    <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
      {blok.headline && (
        <h2 className="font-serif text-3xl md:text-5xl text-center text-ink mb-14">
          {blok.headline}
        </h2>
      )}
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <StoryblokServerComponent blok={item} key={item._uid} />
        ))}
      </div>
    </section>
  );
}
