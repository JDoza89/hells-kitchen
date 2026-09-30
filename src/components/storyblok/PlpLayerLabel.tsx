import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  label?: string;
  text?: string;
};

export default function PlpLayerLabel({ blok }: { blok: Blok }) {
  return (
    <span className="inline-block bg-plaster/90 px-2 py-1 text-xs tracking-wide uppercase">
      {blok.label ?? blok.text}
    </span>
  );
}
