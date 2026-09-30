import { storyblokInit } from "@storyblok/react/rsc";
import ProductLanding from "@/components/storyblok/ProductLanding";
import PlpHero from "@/components/storyblok/PlpHero";
import PlpProofStrip from "@/components/storyblok/PlpProofStrip";
import PlpMaterialStory from "@/components/storyblok/PlpMaterialStory";
import PlpBenefits from "@/components/storyblok/PlpBenefits";
import PlpBenefitItem from "@/components/storyblok/PlpBenefitItem";
import PlpInbox from "@/components/storyblok/PlpInbox";
import PlpFinishes from "@/components/storyblok/PlpFinishes";
import PlpFinishItem from "@/components/storyblok/PlpFinishItem";
import PlpReviews from "@/components/storyblok/PlpReviews";
import PlpReviewItem from "@/components/storyblok/PlpReviewItem";
import PlpSpecs from "@/components/storyblok/PlpSpecs";
import PlpSpecRow from "@/components/storyblok/PlpSpecRow";
import PlpWaitlist from "@/components/storyblok/PlpWaitlist";
import PlpSeo from "@/components/storyblok/PlpSeo";
import PlpStickyTeaser from "@/components/storyblok/PlpStickyTeaser";
import PlpFooter from "@/components/storyblok/PlpFooter";
import PlpQuoteChip from "@/components/storyblok/PlpQuoteChip";
import PlpLayerLabel from "@/components/storyblok/PlpLayerLabel";

export const storyblokComponents = {
  product_landing: ProductLanding,
  plp_hero: PlpHero,
  plp_proof_strip: PlpProofStrip,
  plp_material_story: PlpMaterialStory,
  plp_benefits: PlpBenefits,
  plp_benefit_item: PlpBenefitItem,
  plp_inbox: PlpInbox,
  plp_finishes: PlpFinishes,
  plp_finish_item: PlpFinishItem,
  plp_reviews: PlpReviews,
  plp_review_item: PlpReviewItem,
  plp_specs: PlpSpecs,
  plp_spec_row: PlpSpecRow,
  plp_waitlist: PlpWaitlist,
  plp_seo: PlpSeo,
  plp_sticky_teaser: PlpStickyTeaser,
  plp_footer: PlpFooter,
  plp_quote_chip: PlpQuoteChip,
  plp_layer_label: PlpLayerLabel,
};

export function initStoryblok() {
  storyblokInit({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN ?? "",
    use: [],
    components: storyblokComponents,
    enableFallbackComponent: true,
  });
}

initStoryblok();
