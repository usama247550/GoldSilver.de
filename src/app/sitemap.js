import { siteUrl } from "./seo";

const routes = [
  // Homepage — highest priority, updated daily
  { path: "/", priority: 1.0, changeFrequency: "daily" },

  // Core content categories — high priority, weekly updates
  { path: "/macro", priority: 0.8, changeFrequency: "weekly" },
  { path: "/AiTech", priority: 0.8, changeFrequency: "weekly" },
  { path: "/storage", priority: 0.8, changeFrequency: "weekly" },
  { path: "/estate", priority: 0.8, changeFrequency: "weekly" },
  { path: "/GreenEnergy", priority: 0.8, changeFrequency: "weekly" },
  { path: "/scrapMetal", priority: 0.8, changeFrequency: "weekly" },
  { path: "/offgrid", priority: 0.8, changeFrequency: "weekly" },
  { path: "/numismatics", priority: 0.8, changeFrequency: "weekly" },
  { path: "/coinsBars", priority: 0.8, changeFrequency: "weekly" },
  { path: "/MetalDetecting", priority: 0.8, changeFrequency: "weekly" },
  { path: "/JewelryResale", priority: 0.8, changeFrequency: "weekly" },
  { path: "/Goldsmithing", priority: 0.8, changeFrequency: "weekly" },

  // FAQ — medium priority, updated monthly
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },

  // Legal/static pages — low priority, rarely change
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    priority,
    changeFrequency,
  }));
}
