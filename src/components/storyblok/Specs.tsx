import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  headline?: string;
  rows?: StoryblokBlok[];
};

export default function Specs({ blok }: { blok: Blok }) {
  const rows = blok.rows ?? [];

  return (
    <section className="px-6 md:px-12 py-20 max-w-3xl mx-auto">
      {blok.headline && (
        <h2 className="font-serif text-3xl md:text-5xl text-center text-ink mb-12">
          {blok.headline}
        </h2>
      )}
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
