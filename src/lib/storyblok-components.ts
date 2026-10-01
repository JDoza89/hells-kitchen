import { storyblokInit } from "@storyblok/react/rsc";
import LandingPage from "@/components/storyblok/LandingPage";
import Hero from "@/components/storyblok/Hero";
import ProofStrip from "@/components/storyblok/ProofStrip";
import QuoteChip from "@/components/storyblok/QuoteChip";
import MaterialStory from "@/components/storyblok/MaterialStory";
import LayerLabel from "@/components/storyblok/LayerLabel";
import Benefits from "@/components/storyblok/Benefits";
import BenefitItem from "@/components/storyblok/BenefitItem";
import InTheBox from "@/components/storyblok/InTheBox";
import BoxItem from "@/components/storyblok/BoxItem";
import Finishes from "@/components/storyblok/Finishes";
import Reviews from "@/components/storyblok/Reviews";
import ReviewItem from "@/components/storyblok/ReviewItem";
import Specs from "@/components/storyblok/Specs";
import SpecRow from "@/components/storyblok/SpecRow";
import WaitlistSection from "@/components/storyblok/WaitlistSection";
import Seo from "@/components/storyblok/Seo";

export const storyblokComponents = {
  landing_page: LandingPage,
  hero: Hero,
  proof_strip: ProofStrip,
  quote_chip: QuoteChip,
  material_story: MaterialStory,
  layer_label: LayerLabel,
  benefits: Benefits,
  benefit_item: BenefitItem,
  in_the_box: InTheBox,
  box_item: BoxItem,
  finishes: Finishes,
  review_item: ReviewItem,
  reviews: Reviews,
  specs: Specs,
  spec_row: SpecRow,
  waitlist: WaitlistSection,
  seo: Seo,
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
