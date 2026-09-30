import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  items?: string[];
};

export default function PlpProofStrip({ blok }: { blok: Blok }) {
  const items = blok.items ?? [];

  return (
    <section className="border-y border-ink/10 bg-ink/[0.03]">
      <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 px-6 py-6 text-center text-sm tracking-[0.15em] uppercase text-ink-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            {i > 0 && (
              <span className="hidden sm:inline text-copper" aria-hidden>
                ·
              </span>
            )}
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
