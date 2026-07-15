import "./globals.css";
import "./i18n";
import { cookies } from "next/headers";
import { organizationSchema, siteName, siteUrl, websiteSchema } from "./seo";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Precious Metals, Markets & Insights`,
    template: `%s | ${siteName}`,
  },
  description:
    "Daily precious metals intelligence, market analysis, and investor-focused updates across gold, silver, macro trends, and wealth preservation.",
};

export default function RootLayout({ children }) {
  const locale = cookies().get("gs-lang")?.value === "de" ? "de" : "en";
``
  return (
    <html lang={locale} className={`h-full antialiased`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-7732435226942119" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [organizationSchema, websiteSchema],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
