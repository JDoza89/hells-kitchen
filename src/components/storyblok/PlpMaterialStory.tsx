import Image from "next/image";
import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  title?: string;
  body?: string;
  image?: { filename?: string; alt?: string };
  layer_labels?: StoryblokBlok[];
};

export default function PlpMaterialStory({ blok }: { blok: Blok }) {
  const labels = (blok.layer_labels ?? []) as StoryblokBlok[];

  return (
    <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 py-24 max-w-7xl mx-auto items-center">
      <div className="relative aspect-[4/5] overflow-hidden">
        {blok.image?.filename && (
          <Image
            src={blok.image.filename}
            alt={blok.image.alt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        {labels.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {labels.map((label) => (
              <span
                key={label._uid}
                className="bg-plaster/90 px-2 py-1 text-xs tracking-wide uppercase"
              >
                {String(label.text ?? label.label ?? "")}
              </span>
            ))}
          </div>
        )}
      </div>
      <div>
        <h2 className="font-serif text-4xl md:text-5xl text-ink">{blok.title}</h2>
        <p className="mt-6 text-lg text-ink-muted leading-relaxed whitespace-pre-line">
          {blok.body}
        </p>
      </div>
    </section>
  );
}
