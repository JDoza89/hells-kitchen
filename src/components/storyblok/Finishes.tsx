"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { StoryblokAsset, StoryblokBlok } from "@/lib/storyblok/types";

type FinishBlok = StoryblokBlok & {
  name?: string;
  price?: string;
  care_note?: string;
  is_default?: boolean;
  image?: StoryblokAsset;
};

type Blok = StoryblokBlok & {
  headline?: string;
  spring_note?: string;
  items?: FinishBlok[];
};

export default function Finishes({ blok }: { blok: Blok }) {
  const items = blok.items ?? [];
  const defaultIndex = items.findIndex((item) => item.is_default);
  const [selectedIndex, setSelectedIndex] = useState(
    defaultIndex >= 0 ? defaultIndex : 0,
  );

  const selected = items[selectedIndex];
  const detailImage = useMemo(() => {
    if (!selected) return undefined;
    return selected.image?.filename;
  }, [selected]);

  return (
    <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
      {blok.headline && (
        <h2 className="font-serif text-3xl md:text-5xl text-center text-ink">
          {blok.headline}
        </h2>
      )}
      <div className="mt-12 grid md:grid-cols-[1fr_1.1fr] gap-10 items-start">
        <div className="space-y-3">
          {items.map((item, index) => {
            const isActive = index === selectedIndex;
            const isCopper = item.name?.toLowerCase().includes("copper");
            return (
              <button
                key={item._uid}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`w-full text-left border px-4 py-4 transition-colors ${
                  isActive
                    ? "border-ink bg-stone/50"
                    : "border-ink/15 hover:border-ink/30"
                }`}
                aria-pressed={isActive}
              >
                <div className="flex justify-between gap-4 items-baseline">
                  <span
                    className={`font-medium ${isCopper && isActive ? "text-copper" : "text-ink"}`}
                  >
                    {item.name}
                  </span>
                  {item.price && (
                    <span className="text-sm tabular-nums text-ink/70">{item.price}</span>
                  )}
                </div>
                {item.care_note && (
                  <p className="mt-2 text-sm text-ink/60">{item.care_note}</p>
                )}
              </button>
            );
          })}
        </div>
        <div className="relative aspect-[4/3] bg-stone/60 border border-ink/10 overflow-hidden">
          {detailImage ? (
            <Image
              src={detailImage}
              alt={selected?.image?.alt ?? selected?.name ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-ink/40">
              {selected?.name}
            </div>
          )}
        </div>
      </div>
      {blok.spring_note && (
        <p className="mt-10 text-center text-sm text-ink/60 max-w-2xl mx-auto">
          {blok.spring_note}
        </p>
      )}
    </section>
  );
}
