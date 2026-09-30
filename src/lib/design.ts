export const designTokens = {
  plaster: "#F7F4F0",
  ink: "#2A2826",
  inkMuted: "#5C5854",
  copper: "#B87333",
  copperLight: "#D4A574",
  steel: "#8A9199",
} as const;

export const STICKY_TEASER_VISIBLE_FROM = new Date("2026-10-01T00:00:00Z");

export function isStickyTeaserVisible(now = new Date()): boolean {
  return now >= STICKY_TEASER_VISIBLE_FROM;
}
