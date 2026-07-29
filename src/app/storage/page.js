

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/storage-components/Banner";
import LiveTickerZone from "../components/storage-components/LiveTickerZone";
import TodayUpdates from "../components/storage-components/TodayUpdates";
import HorizontalCard from "../components/storage-components/HorizontalCard";
import TrustedPartners from "../components/storage-components/TrustedPartners";
import GoldNewsBanner from "../components/storage-components/GoldNewsBanner";
import { buildMetadata, buildBreadcrumbSchema } from "../seo";
import ArticleSection from "../components/storage-components/ArticleSection";

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Precious Metals Storage", url: "/storage" },
]);

export const metadata = buildMetadata({
  title: "Bullion Vault & Precious Metals Storage for Investors | GoldSilver.de",
  description:
    "Secure your precious metals in a trusted bullion vault. Explore storage, logistics, and capital preservation themes shaping the precious metals market for long-term investors.",
  path: "/storage",
});

const Storage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <Banner />
      <LiveTickerZone />
      <TodayUpdates horizontalCard={<HorizontalCard />} />
      <TrustedPartners />
      <ArticleSection/>
      <GoldNewsBanner />
      <Footer />
    </>
  );
};

export default Storage;
