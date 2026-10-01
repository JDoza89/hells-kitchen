import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  title?: string;
  body?: string;
  icon?: string;
};

export default function BenefitItem({ blok }: { blok: Blok }) {
  return (
    <li className="border-t border-ink/10 pt-8">
      {blok.title && (
        <h3 className="font-serif text-xl md:text-2xl text-ink">{blok.title}</h3>
      )}
      {blok.body && (
        <p className="mt-3 text-ink/75 leading-relaxed">{blok.body}</p>
      )}
    </li>
  );
}
