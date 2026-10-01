import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  label?: string;
  layer?: string;
};

export default function LayerLabel({ blok }: { blok: Blok }) {
  return (
    <li className="flex items-center gap-3 text-sm text-ink/80">
      <span className="w-2 h-2 rounded-full bg-ink/30 shrink-0" aria-hidden />
      {blok.label}
    </li>
  );
}
