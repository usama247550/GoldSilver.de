import { siteUrl } from "./seo";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Mediapartners-Google", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}