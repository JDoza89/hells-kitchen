export type StoryblokAsset = {
  filename?: string;
  alt?: string;
  title?: string;
  fieldtype?: string;
};

export type StoryblokMultilink = {
  url?: string;
  cached_url?: string;
  linktype?: string;
};

export type StoryblokBlok = {
  _uid: string;
  component: string;
  [key: string]: unknown;
};

export type LandingPageContent = {
  _uid: string;
  component: "landing_page";
  teaser_message?: string;
  teaser_start?: string;
  launch_date?: string;
  teaser_cta_label?: string;
  body?: StoryblokBlok[];
  seo?: StoryblokBlok[];
};
