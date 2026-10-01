import Image from "next/image";
import Link from "next/link";
import type { StoryblokAsset, StoryblokBlok } from "@/lib/storyblok/types";
import { linkHref } from "@/lib/storyblok/i18n-fields";
import type { StoryblokMultilink } from "@/lib/storyblok/i18n-fields";

type Blok = StoryblokBlok & {
  headline?: string;
  intro?: string;
  cta_label?: string;
  cta_link?: StoryblokMultilink;
  trust_line?: string;
  price_whisper?: string;
  image?: StoryblokAsset;
};

export default function Hero({ blok }: { blok: Blok }) {
  const headline = blok.headline;
  const intro = blok.intro;
  const ctaLabel = blok.cta_label;
  const trustLine = blok.trust_line;
  const priceWhisper = blok.price_whisper;
  const href = linkHref(blok.cta_link) ?? "#waitlist";
  const img = blok.image?.filename;

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-end px-6 md:px-12 pb-20 pt-28">
      {img && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={img}
            alt={blok.image?.alt ?? ""}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plaster via-plaster/50 to-plaster/20" />
        </div>
      )}
      <div className="max-w-3xl">
        {headline && (
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] text-ink tracking-tight">
            {headline}
          </h1>
        )}
        {intro && (
          <p className="mt-6 text-base md:text-lg text-ink/80 max-w-2xl leading-relaxed">
            {intro}
          </p>
        )}
        {priceWhisper && (
          <p className="mt-4 text-sm tabular-nums text-ink/70">{priceWhisper}</p>
        )}
        {trustLine && (
          <p className="mt-2 text-sm text-ink/60">{trustLine}</p>
        )}
        {ctaLabel && (
          <Link
            href={href}
            className="inline-block mt-10 bg-ink text-plaster px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-ink/85 transition-colors"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
