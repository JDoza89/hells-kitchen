import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { ProductLandingContent, StoryblokBlok } from "@/lib/storyblok";
import PlpStickyTeaser from "./PlpStickyTeaser";
import PlpFooter from "./PlpFooter";

export default function ProductLanding({
  blok,
}: {
  blok: ProductLandingContent;
}) {
  const body = blok.body ?? [];
  const visibleBody = body.filter((b) => b.component !== "plp_seo");

  return (
    <main>
      {visibleBody.map((section) => (
        <StoryblokServerComponent blok={section} key={section._uid} />
      ))}
      {blok.sticky_teaser && <PlpStickyTeaser blok={blok.sticky_teaser} />}
      {blok.footer && <PlpFooter blok={blok.footer} />}
    </main>
  );
}

export function findSeoBlok(body: StoryblokBlok[]): StoryblokBlok | undefined {
  return body.find((b) => b.component === "plp_seo");
}
