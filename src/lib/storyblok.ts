import StoryblokClient from "storyblok-js-client";
import type { ISbStoryData } from "storyblok-js-client";
import { STORYBLOK_STORY_SLUG } from "./storyblok-config";
import type { Locale } from "./i18n";

export type { StoryblokBlok, LandingPageContent } from "./storyblok/types";

function getClient() {
  const token = process.env.STORYBLOK_ACCESS_TOKEN;
  if (!token) return null;

  return new StoryblokClient({
    accessToken: token,
    region: process.env.STORYBLOK_REGION ?? "us",
  });
}

export async function fetchBlokCladStory(
  locale: Locale,
  options: { version?: "draft" | "published" } = {},
): Promise<ISbStoryData> {
  const token = process.env.STORYBLOK_ACCESS_TOKEN;
  if (!token) {
    throw new Error(
      "STORYBLOK_ACCESS_TOKEN is required to render Blok Clad content.",
    );
  }

  const version =
    options.version ??
    (process.env.STORYBLOK_PREVIEW === "true" ? "draft" : "published");

  const client = getClient();
  if (!client) {
    throw new Error("Storyblok client could not be initialized.");
  }

  const { data } = await client.get(`cdn/stories/${STORYBLOK_STORY_SLUG}`, {
    version,
    language: locale,
    resolve_links: "url",
    cv: Date.now(),
  });

  return data.story as ISbStoryData;
}
