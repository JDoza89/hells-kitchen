import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  label?: string;
  value?: string;
};

export default function PlpSpecRow({ blok }: { blok: Blok }) {
  return (
    <tr className="border-b border-ink/10">
      <th className="py-4 pr-8 text-left text-sm font-medium tracking-wide text-ink-muted uppercase w-1/3">
        {blok.label}
      </th>
      <td className="py-4 text-ink">{blok.value}</td>
    </tr>
  );
}
