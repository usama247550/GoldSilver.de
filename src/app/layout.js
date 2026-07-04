import "./globals.css";
import "./i18n";
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
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
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
