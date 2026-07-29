import "./globals.css";
import "./i18n";

import { cookies } from "next/headers";

import {
  organizationSchema,
  siteName,
  siteUrl,
  websiteSchema,
  siteNavigationSchema,
} from "./seo";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | Precious Metals, Markets & Insights`,
    template: `%s | ${siteName}`,
  },

  description:
    "Daily precious metals intelligence, market analysis, and investor-focused updates across gold, silver, macro trends, and wealth preservation.",

  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();

  const locale =
    cookieStore.get("gs-lang")?.value === "de"
      ? "de"
      : "en";

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      siteNavigationSchema,
    ],
  };

  return (
    <html
      lang={locale}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        {/* Google AdSense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-7732435226942119"
        />

        {/* GEO: Germany / DACH targeting */}
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Germany" />

        {/* GEO / AI crawler discovery */}
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
        />
      </head>

      <body className="min-h-full flex flex-col">
        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
          }}
        />

        {children}
      </body>
    </html>
  );
}