import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { StoryblokStory } from "@storyblok/react/rsc";
import "@/lib/storyblok-rsc-init";
import { fetchBlokCladStory } from "@/lib/storyblok";
import { seoFromLandingPage } from "@/lib/storyblok/seo";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { LandingPageContent } from "@/lib/storyblok/types";
import { StoryblokLocaleProvider } from "@/lib/storyblok/locale-context";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const story = await fetchBlokCladStory(locale as Locale);
  const content = story.content as LandingPageContent;
  const seo = seoFromLandingPage(content);
  return {
    title: seo.title,
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

  return (
    <StoryblokLocaleProvider locale={locale as Locale}>
      <StoryblokStory story={story} />
    </StoryblokLocaleProvider>
  );
}
