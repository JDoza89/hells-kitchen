import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  title?: string;
  rows?: StoryblokBlok[];
};

export default function PlpSpecs({ blok }: { blok: Blok }) {
  const rows = blok.rows ?? [];

  return (
    <section className="px-6 md:px-12 py-24 max-w-3xl mx-auto">
      <h2 className="font-serif text-4xl text-center text-ink mb-12">{blok.title}</h2>
      <table className="w-full">
        <tbody>
          {rows.map((row) => (
            <StoryblokServerComponent blok={row} key={row._uid} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
