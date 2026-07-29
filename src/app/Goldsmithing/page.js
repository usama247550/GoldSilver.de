

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/Goldsmithing-Components/Banner";
import LiveTickerZone from "../components/Goldsmithing-Components/LiveTickerZone";
import TodayUpdates from "../components/Goldsmithing-Components/TodayUpdates";
import HorizontalCard from "../components/Goldsmithing-Components/HorizontalCard";
import GoldNewsBanner from "../components/Goldsmithing-Components/GoldNewsBanner";
import TrustedPartners from "../components/Goldsmithing-Components/TrustedPartners";
import ArticleSection from "../components/Goldsmithing-Components/ArticleSection";
import { buildMetadata, buildBreadcrumbSchema } from "../seo";

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Goldsmithing", url: "/Goldsmithing" },
]);

export const metadata = buildMetadata({
  title: "Goldsmithing Insights | GoldSilver.de Craft and Value",
  description:
    "Read about goldsmithing, fabrication, craftsmanship, and how jewelry-making skills influence the value of precious metals.",
  path: "/Goldsmithing",
});

const Goldsmithing = () => {
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

export default Goldsmithing;