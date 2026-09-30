import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  title?: string;
  description?: string;
};

export default function PlpBenefitItem({ blok }: { blok: Blok }) {
  return (
    <li className="border-t border-ink/10 pt-8">
      <h3 className="font-serif text-2xl text-ink">{blok.title}</h3>
      <p className="mt-3 text-ink-muted leading-relaxed">{blok.description}</p>
    </li>
  );
}
