import type { StoryblokAsset, StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  name?: string;
  price?: string;
  care_note?: string;
  is_default?: boolean;
  image?: StoryblokAsset;
};

/** Nestable finish row; parent `finishes` blok usually renders items inline. */
export default function FinishItem({ blok }: { blok: Blok }) {
  return (
    <div className="border border-ink/15 px-4 py-4">
      <div className="flex justify-between gap-4 items-baseline">
        {blok.name && <span className="font-medium text-ink">{blok.name}</span>}
        {blok.price && (
          <span className="text-sm tabular-nums text-ink/70">{blok.price}</span>
        )}
      </div>
      {blok.care_note && (
        <p className="mt-2 text-sm text-ink/60">{blok.care_note}</p>
      )}
    </div>
  );
}
