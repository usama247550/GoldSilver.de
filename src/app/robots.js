import { siteUrl } from "./seo";

export default function robots() {
  return {
    rules: [
      // Standard crawlers
      { userAgent: "*", allow: "/" },
      { userAgent: "Mediapartners-Google", allow: "/" },

      // --- GEO: AI Search & Retrieval Bots ---
      // OpenAI — ChatGPT search citations + training
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },

      // Anthropic — Claude search + training
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },

      // Perplexity AI search
      { userAgent: "PerplexityBot", allow: "/" },

      // Google — Gemini/Vertex AI training
      { userAgent: "Google-Extended", allow: "/" },

      // Amazon — Alexa/AI
      { userAgent: "Amazonbot", allow: "/" },

      // Meta AI
      { userAgent: "Meta-ExternalAgent", allow: "/" },

      // ByteDance — TikTok AI
      { userAgent: "Bytespider", allow: "/" },

      // Apple — Applebot for AI features
      { userAgent: "Applebot", allow: "/" },

      // Common AI research crawlers
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}