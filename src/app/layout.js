import "./globals.css";
import "./i18n";
import { cookies } from "next/headers";
import Script from "next/script";
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

  return (
    <html
      lang={locale}
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [organizationSchema, websiteSchema],
            }),
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7732435226942119"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      {children}
      </body>
    </html>
  );
}