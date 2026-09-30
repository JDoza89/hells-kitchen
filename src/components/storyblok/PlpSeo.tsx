import type { StoryblokBlok } from "@/lib/storyblok";

/** SEO blok — metadata applied in page; component is a no-op in the body. */
export default function PlpSeo() {
  return null;
}

export function seoFromBlok(blok: StoryblokBlok | undefined) {
  if (!blok) return {};
  return {
    title: (blok.title as string) ?? undefined,
    description: (blok.description as string) ?? undefined,
    ogImage:
      (blok.og_image as { filename?: string })?.filename ??
      (blok.image as { filename?: string })?.filename,
  };
}
