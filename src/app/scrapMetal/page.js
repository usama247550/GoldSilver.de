
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/scrap-Components/Banner";
import LiveTickerZone from "../components/scrap-Components/LiveTickerZone";
import TodayUpdates from "../components/scrap-Components/TodayUpdates";
import HorizontalCard from "../components/scrap-Components/HorizontalCard";
import GoldNewsBanner from "../components/scrap-Components/GoldNewsBanner";
import TrustedPartners from "../components/scrap-Components/TrustedPartners";
import { buildMetadata, buildBreadcrumbSchema } from "../seo";
import ArticleSection from "../components/scrap-Components/ArticleSection";

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Scrap Metal Recycling", url: "/scrapMetal" },
]);

export const metadata = buildMetadata({
  title: "Recycled Metal Market Insights | GoldSilver.de Scrap & Recovery",
  description:
    "Explore the recycled metal market including recycling, recovery, and industrial scrap flows that create new value opportunities for gold, silver, and other precious metals.",
  path: "/scrapMetal",
});

const scrapMetal = () => {
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

export default scrapMetal;