"use client";

import { useState } from "react";
import type { StoryblokBlok } from "@/lib/storyblok";
import PlpFinishItem from "./PlpFinishItem";

type Blok = StoryblokBlok & {
  title?: string;
  default_finish?: string;
  items?: StoryblokBlok[];
};

export default function PlpFinishes({ blok }: { blok: Blok }) {
  const items = blok.items ?? [];
  const defaultFinish = blok.default_finish ?? "brushed_steel";
  const [selected, setSelected] = useState(defaultFinish);

  return (
    <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
      <h2 className="font-serif text-4xl text-center text-ink mb-12">{blok.title}</h2>
      <div className="grid grid-cols-3 gap-4 md:gap-8">
        {items.map((item) => {
          const slug = (item.slug as string) ?? item._uid;
          return (
            <PlpFinishItem
              key={item._uid}
              blok={item}
              selected={selected === slug}
              onSelect={setSelected}
            />
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm text-ink-muted tracking-wide">
        Selected:{" "}
        {String(
          items.find((i) => (i.slug as string) === selected)?.name ?? selected,
        )}
      </p>
    </section>
  );
}
