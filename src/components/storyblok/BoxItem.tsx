import type { StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  label?: string;
  detail?: string;
};

export default function BoxItem({ blok }: { blok: Blok }) {
  return (
    <li className="flex justify-between gap-4 border-b border-ink/10 py-3 text-sm md:text-base">
      <span className="text-ink">{blok.label}</span>
      {blok.detail && (
        <span className="text-ink/55 text-right shrink-0">{blok.detail}</span>
      )}
    </li>
  );
}
