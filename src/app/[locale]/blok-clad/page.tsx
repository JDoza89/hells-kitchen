import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { StoryblokStory } from "@storyblok/react/rsc";
import "@/lib/storyblok-components";
import { fetchBlokCladStory } from "@/lib/storyblok";
import { findSeoBlok } from "@/components/storyblok/ProductLanding";
import { seoFromBlok } from "@/components/storyblok/PlpSeo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { ProductLandingContent } from "@/lib/storyblok";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const story = await fetchBlokCladStory(locale as Locale);
  const content = story.content as ProductLandingContent;
  const seoBlok = findSeoBlok(content.body ?? []);
  const seo = seoFromBlok(seoBlok);
  return {
    title: seo.title ?? "Blok Clad",
    description: seo.description,
    openGraph: seo.ogImage ? { images: [seo.ogImage] } : undefined,
  };
}

export default async function BlokCladPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const { isEnabled: isDraft } = await draftMode();
  const story = await fetchBlokCladStory(locale as Locale, {
    version: isDraft ? "draft" : "published",
  });

  return <StoryblokStory story={story} />;
}
