import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { LandingPageContent } from "@/lib/storyblok/types";
import StickyTeaser from "./StickyTeaser";

export default function LandingPage({ blok }: { blok: LandingPageContent }) {
  const body = blok.body ?? [];

  return (
    <>
      <StickyTeaser blok={blok} />
      <main>
        {body.map((section) => (
          <StoryblokServerComponent blok={section} key={section._uid} />
        ))}
      </main>
    </>
  );
}
