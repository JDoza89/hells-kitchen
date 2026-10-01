import type { LandingPageContent, StoryblokAsset, StoryblokBlok } from "./types";

export function seoFromLandingPage(content: LandingPageContent) {
  const seoBlok = content.seo?.[0] as StoryblokBlok | undefined;
  if (!seoBlok) return {};
  const og = seoBlok.og_image as StoryblokAsset | undefined;
  return {
    title: seoBlok.meta_title as string | undefined,
    description: seoBlok.meta_description as string | undefined,
    ogImage: og?.filename,
  };
}
