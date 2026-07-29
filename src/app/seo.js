export const siteUrl = "https://www.goldsilver.de";

export const siteName = "GoldSilver.de";
export const defaultDescription =
  "Daily precious metals intelligence, market analysis, and investor-focused updates across gold, silver, macro trends, and wealth preservation.";
export const defaultSocialImage = "/grid-images/gridimage1.webp";

// ---------------------------------------------------------------------------
// Static page metadata (privacy, contact, disclaimer, terms)
// ---------------------------------------------------------------------------
const localizedStaticPages = {
  privacy: {
    en: {
      title: "Privacy Policy and Data Practices for GoldSilver.de",
      description:
        "Review how GoldSilver.de collects, uses, and protects technical data when you browse our market analysis, news, and educational content.",
    },
    de: {
      title: "Datenschutzrichtlinie und Datenverarbeitung für GoldSilver.de",
      description:
        "Erfahren Sie, wie GoldSilver.de technische Daten erhebt, verwendet und schützt, wenn Sie unsere Marktanalysen, Nachrichten und Bildungsinhalte besuchen.",
    },
  },
  contact: {
    en: {
      title: "Contact GoldSilver.de for Support and Partnerships",
      description:
        "Reach GoldSilver.de for content questions, partnerships, editorial feedback, and technical support related to our market insights.",
    },
    de: {
      title: "Kontakt zu GoldSilver.de für Support und Partnerschaften",
      description:
        "Kontaktieren Sie GoldSilver.de bei Fragen zu Inhalten, Partnerschaften, redaktionellem Feedback und technischem Support rund um unsere Markteinblicke.",
    },
  },
  disclaimer: {
    en: {
      title: "Disclaimer and Risk Notice for GoldSilver.de Readers",
      description:
        "Read the GoldSilver.de disclaimer covering informational use only, market risk, external links, and the limits of our editorial content.",
    },
    de: {
      title: "Haftungsausschluss und Risikohinweis für GoldSilver.de",
      description:
        "Lesen Sie den Haftungsausschluss von GoldSilver.de zu Informationszwecken, Marktrisiken, externen Links und den Grenzen unserer redaktionellen Inhalte.",
    },
  },
  terms: {
    en: {
      title: "Terms of Service | GoldSilver.de Gold & Silver Market Insights",
      description:
        "GoldSilver.de provides daily gold and silver market insights and investment guidance. Review our terms of service covering site use, content accuracy, and liability.",
    },
    de: {
      title: "Nutzungsbedingungen und Regeln für GoldSilver.de",
      description:
        "Verstehen Sie die Bedingungen für den Zugriff auf Inhalte von GoldSilver.de, einschließlich zulässiger Nutzung, Genauigkeitsgrenzen und Haftungshinweisen.",
    },
  },
};

// ---------------------------------------------------------------------------
// buildMetadata — used by every page
// Includes hreflang alternates for DE/EN geographic targeting
// ---------------------------------------------------------------------------
export function buildMetadata({ title, description, path, image }) {
  const ogImage = image || defaultSocialImage;
  return {
    title,
    description,
    alternates: {
  canonical: `${siteUrl}${path}`,
      // Geographic language targeting — same URL serves both DE and EN
      languages: {
        "de-DE": `/de${path}`,
        en: `/en${path}`,
        "x-default": `/en${path}`,
      }
    },
    openGraph: {
      type: "website",
       url: `${siteUrl}${path}`,
      siteName,
      title,
      description,
      locale: "en_US",
      alternateLocale: ["de_DE"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// ---------------------------------------------------------------------------
// buildLocalizedStaticPageMetadata — used by privacy/terms/disclaimer/contact
// ---------------------------------------------------------------------------
export function buildLocalizedStaticPageMetadata(pageKey, locale = "en") {
  const page = localizedStaticPages[pageKey];
  const lang = locale === "de" ? "de" : "en";
  const seo = page?.[lang] || page?.en;

  if (!seo) {
    throw new Error(`Unknown localized page metadata: ${pageKey}`);
  }

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/${pageKey}`,
  });
}

// ---------------------------------------------------------------------------
// Organization Schema — enriched with geo & multilingual signals
// ---------------------------------------------------------------------------
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/favicon.png`,
    width: 512,
    height: 512,
  },
  // Geographic targeting — primary market is Germany / DACH region
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
  ],
  // Fake location signals can hurt local SEO.
  // address: {
  //   "@type": "PostalAddress",
  //   addressCountry: "DE",
  // },
  // Bilingual — tells AI engines the site serves both languages
  availableLanguage: [
    { "@type": "Language", name: "German", alternateName: "de" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@goldsilver.de",
    contactType: "customer support",
    availableLanguage: ["German", "English"],
  },
};

// ---------------------------------------------------------------------------
// Website Schema — with SearchAction for AI sitelinks
// ---------------------------------------------------------------------------
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  inLanguage: ["de", "en"],
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ---------------------------------------------------------------------------
// SiteNavigationElement Schema — helps AI understand site structure
// ---------------------------------------------------------------------------
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: [
    "Macro",
    "AI & Tech",
    "Storage",
    "Estate",
    "Green Energy",
    "Scrap Metal",
    "Off Grid",
    "Numismatics",
    "Coins & Bars",
    "Goldsmithing",
    "Jewelry Resale",
    "Metal Detecting",
  ],
  url: [
    `${siteUrl}/macro`,
    `${siteUrl}/AiTech`,
    `${siteUrl}/storage`,
    `${siteUrl}/estate`,
    `${siteUrl}/GreenEnergy`,
    `${siteUrl}/scrapMetal`,
    `${siteUrl}/offgrid`,
    `${siteUrl}/numismatics`,
    `${siteUrl}/coinsBars`,
    `${siteUrl}/Goldsmithing`,
    `${siteUrl}/JewelryResale`,
    `${siteUrl}/MetalDetecting`,
  ],
};

// ---------------------------------------------------------------------------
// FAQ Schema
// ---------------------------------------------------------------------------
export function buildFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// Article Schema — enriched with language, author and entity signals
// ---------------------------------------------------------------------------
export function buildArticleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  inLanguage = "en",
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${siteUrl}${path}`,
    inLanguage,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`,
    },
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.png`,
      },
    },
    image: `${siteUrl}${defaultSocialImage}`,
  };
}

// ---------------------------------------------------------------------------
// Breadcrumb Schema — used by every page for AI hierarchy signals
// items: [{ name: "Home", url: "/" }, { name: "Macro", url: "/macro" }]
// ---------------------------------------------------------------------------
export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}