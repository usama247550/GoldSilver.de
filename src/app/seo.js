export const siteUrl = "https://www.goldsilver.de";

export const siteName = "GoldSilver.de";
export const defaultDescription =
  "Daily precious metals intelligence, market analysis, and investor-focused updates across gold, silver, macro trends, and wealth preservation.";
export const defaultSocialImage = "/grid-images/gridimage1.webp";

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

export function buildMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName,
      title,
      description,
      images: [
        {
          url: defaultSocialImage,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultSocialImage],
    },
  };
}

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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
};

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
