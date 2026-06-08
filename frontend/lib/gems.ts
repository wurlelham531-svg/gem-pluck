import { GEMS as SDK_GEMS, GemInfo } from "gem-pluck-sdk";

export interface Gem extends GemInfo {
  tagline: string;
  glow: string;
}

const TAGLINES: Record<number, string> = {
  1: "Crimson fire from the deep",
  2: "Cool depth, cobalt soul",
  3: "Emerald glade, forest pulse",
  4: "Golden ember, autumn light",
  5: "Royal violet, lucid dreams",
  6: "Shadow stone, the silent one",
};

const GLOWS: Record<number, string> = {
  1: "rgba(224, 32, 96, 0.45)",
  2: "rgba(32, 96, 224, 0.45)",
  3: "rgba(32, 192, 96, 0.45)",
  4: "rgba(224, 160, 32, 0.45)",
  5: "rgba(160, 32, 224, 0.45)",
  6: "rgba(120, 120, 130, 0.45)",
};

export const GEMS: Gem[] = SDK_GEMS.map((g) => ({
  ...g,
  tagline: TAGLINES[g.id] ?? "",
  glow:    GLOWS[g.id]    ?? "rgba(160, 32, 224, 0.45)",
}));
