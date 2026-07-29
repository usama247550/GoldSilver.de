import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import FeaturedGrid from "./components/home-component/FeaturedGrid";
import GoldNewsBanner from "./components/home-component/GoldNewsBanner";
import LatestUpdates from "./components/home-component/LatestUpdates";

import {
  buildMetadata,
  buildBreadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "./seo";

const schemas = [
  buildBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]),
  organizationSchema,
  websiteSchema,
];

export const metadata = buildMetadata({
  title: "GoldSilver.de – Ihr Markt für Gold & Silber Preise",
  description:
    "GoldSilver.de bietet tägliche Gold- und Silbermarktanalysen, Edelmetallpreise und Investoren-Updates für den internationalen Markt.",
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* SEO Structured Data */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <Header />

      <main>
        <FeaturedGrid />
        <GoldNewsBanner />
        <LatestUpdates />
      </main>

      <Footer />
    </>
  );
}