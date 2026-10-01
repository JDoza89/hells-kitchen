import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";
import type { StoryblokAsset, StoryblokBlok } from "@/lib/storyblok/types";

type Blok = StoryblokBlok & {
  headline?: string;
  body?: string;
  cta_label?: string;
  anchor_id?: string;
  background_image?: StoryblokAsset;
};

export default function WaitlistSection({ blok }: { blok: Blok }) {
  const sectionId = blok.anchor_id || "waitlist";
  const bg = blok.background_image?.filename;

  return (
    <section
      id={sectionId}
      className="relative px-6 md:px-12 py-28 scroll-mt-24 border-t border-ink/10 overflow-hidden"
    >
      {bg && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={bg}
            alt={blok.background_image?.alt ?? ""}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-plaster/85" />
        </div>
      )}
      <div className="max-w-2xl mx-auto text-center">
        {blok.headline && (
          <h2 className="font-serif text-3xl md:text-5xl text-ink">{blok.headline}</h2>
        )}
        {blok.body && (
          <p className="mt-5 text-ink/75 leading-relaxed">{blok.body}</p>
        )}
        <div className="mt-10 flex justify-center">
          <WaitlistForm ctaLabel={blok.cta_label ?? ""} />
        </div>
      </div>
    </section>
  );
}
