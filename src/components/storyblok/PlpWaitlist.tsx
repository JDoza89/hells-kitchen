import { WaitlistFormWithFinish } from "@/components/WaitlistForm";
import type { StoryblokBlok } from "@/lib/storyblok";

type Blok = StoryblokBlok & {
  title?: string;
  subtitle?: string;
  cta_label?: string;
  success_message?: string;
  default_finish?: string;
  finishes?: StoryblokBlok[];
};

export default function PlpWaitlist({ blok }: { blok: Blok }) {
  const finishOptions =
    blok.finishes?.map((f) => ({
      slug: String(f.slug ?? ""),
      name: String(f.name ?? ""),
    })) ?? undefined;

  return (
    <section
      id="waitlist"
      className="px-6 md:px-12 py-28 border-t border-ink/10 scroll-mt-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-ink">{blok.title}</h2>
        <p className="mt-4 text-ink-muted text-lg">{blok.subtitle}</p>
        <div className="mt-10 flex justify-center">
          <WaitlistFormWithFinish
            ctaLabel={blok.cta_label ?? "Join the waitlist"}
            successMessage={blok.success_message ?? "Thank you."}
            defaultFinish={blok.default_finish ?? "brushed_steel"}
            finishes={finishOptions}
          />
        </div>
      </div>
    </section>
  );
}
