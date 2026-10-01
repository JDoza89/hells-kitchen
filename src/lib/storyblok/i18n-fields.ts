import type { Locale } from "@/lib/i18n";

/** Resolve field-level i18n when Storyblok returns `field__i18n__{locale}` keys. */
export function localizedString(
  blok: Record<string, unknown>,
  field: string,
  locale: Locale,
): string | undefined {
  if (locale !== "en") {
    const localized = blok[`${field}__i18n__${locale}`];
    if (typeof localized === "string" && localized.trim()) {
      return localized;
    }
  }
  const value = blok[field];
  return typeof value === "string" ? value : undefined;
}

export function linkHref(link?: StoryblokMultilink | null): string | undefined {
  if (!link) return undefined;
  const href = link.cached_url || link.url;
  if (!href) return undefined;
  return href;
}

export type StoryblokMultilink = {
  url?: string;
  cached_url?: string;
  linktype?: string;
};

export function parseStoryblokDate(value?: string): Date | null {
  if (!value) return null;
  const normalized = value.includes("T") ? value : value.replace(" ", "T");
  const d = new Date(normalized);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function isTeaserBarVisible(
  teaserStart?: string,
  launchDate?: string,
  now = new Date(),
): boolean {
  const start = parseStoryblokDate(teaserStart);
  const end = parseStoryblokDate(launchDate);
  if (!start || !end) return false;
  return now >= start && now < end;
}
