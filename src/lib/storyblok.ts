import StoryblokClient from "storyblok-js-client";
import type { ISbStoryData } from "storyblok-js-client";
import {
  STORYBLOK_CDN_HOST,
  STORYBLOK_STORY_SLUG,
} from "./storyblok-config";
import { getMockBlokCladStory } from "./mock-story";
import type { Locale } from "./i18n";

export type ProductLandingContent = {
  component: "product_landing";
  body: StoryblokBlok[];
  sticky_teaser?: StoryblokBlok;
  footer?: StoryblokBlok;
  _uid: string;
};

export type StoryblokBlok = {
  _uid: string;
  component: string;
  [key: string]: unknown;
};

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
  const version =
    options.version ??
    (process.env.STORYBLOK_PREVIEW === "true" ? "draft" : "published");

  const client = getClient();
  if (!client) {
    return getMockBlokCladStory(locale);
  }

  try {
    const { data } = await client.get(`cdn/stories/${STORYBLOK_STORY_SLUG}`, {
      version,
      language: locale,
      resolve_links: "url",
      cv: Date.now(),
    });
    return data.story as ISbStoryData;
  } catch (error) {
    console.error("[storyblok] fetch failed, using mock story", error);
    return getMockBlokCladStory(locale);
  }
}

export function getStoryblokBridgeOptions() {
  return {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN ?? "",
    bridge: process.env.NODE_ENV !== "production",
  };
}

export { STORYBLOK_CDN_HOST };
