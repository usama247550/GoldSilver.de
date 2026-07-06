import { siteUrl } from "./seo";

const routes = [
  "/",
  "/macro",
  "/AiTech",
  "/storage",
  "/estate",
  "/GreenEnergy",
  "/scrapMetal",
  "/offgrid",
  "/numismatics",
  "/coinsBars",
  "/MetalDetecting",
  "/JewelryResale",
  "/Goldsmithing",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/contact",
  "/faq",
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
