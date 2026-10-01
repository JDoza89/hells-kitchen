"use client";

import { useEffect } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { storyblokComponents } from "@/lib/storyblok-components";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN ?? "",
  use: [apiPlugin],
  components: storyblokComponents,
});

export function StoryblokBridge() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("_storyblok")) {
      import("@storyblok/react").then(({ loadStoryblokBridge }) => {
        loadStoryblokBridge()
          .then(() => {
            const bridge = (
              window as unknown as {
                StoryblokBridge?: new (opts: { preventClicks?: boolean }) => void;
              }
            ).StoryblokBridge;
            if (bridge) {
              new bridge({});
            }
          })
          .catch(() => undefined);
      });
    }
  }, []);

  return null;
}
