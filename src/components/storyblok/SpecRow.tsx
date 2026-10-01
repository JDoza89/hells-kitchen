"use client";

import type { StoryblokBlok } from "@/lib/storyblok/types";
import { useStoryblokLocale } from "@/lib/storyblok/locale-context";

type Blok = StoryblokBlok & {
  label?: string;
  value_imperial?: string;
  value_metric?: string;
};

export default function SpecRow({ blok }: { blok: Blok }) {
  const locale = useStoryblokLocale();
  const value =
    locale === "en" ? blok.value_imperial : blok.value_metric ?? blok.value_imperial;

  return (
    <tr className="border-b border-ink/10">
      <th className="py-4 pr-8 text-left text-xs font-medium tracking-wide text-ink/55 uppercase align-top w-[38%]">
        {blok.label}
      </th>
      <td className="py-4 text-ink tabular-nums align-top">{value}</td>
    </tr>
  );
}
