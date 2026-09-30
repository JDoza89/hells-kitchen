import Image from "next/image";
import Link from "next/link";
import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  headline?: string;
  subheadline?: string;
  cta_label?: string;
  cta_anchor?: string;
  image?: { filename?: string; alt?: string };
};

export default function PlpHero({ blok }: { blok: Blok }) {
  const img = blok.image?.filename;

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end px-6 md:px-12 pb-16 pt-32">
      {img && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={img}
            alt={blok.image?.alt ?? ""}
            fill
            className="object-cover opacity-90"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plaster via-plaster/40 to-transparent" />
        </div>
      )}
      <div className="max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-ink tracking-tight">
          {blok.headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed">
          {blok.subheadline}
        </p>
        {blok.cta_label && blok.cta_anchor && (
          <Link
            href={blok.cta_anchor}
            className="inline-block mt-10 border-b-2 border-copper pb-1 text-sm font-medium tracking-[0.2em] uppercase text-ink hover:text-copper transition-colors"
          >
            {blok.cta_label}
          </Link>
        )}
      </div>
    </section>
  );
}
