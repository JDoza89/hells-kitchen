import "server-only";
import { storyblokInit } from "@storyblok/react/rsc";
import { storyblokComponents } from "@/lib/storyblok-components-map";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN ?? "",
  use: [],
  components: storyblokComponents,
  enableFallbackComponent: true,
});
