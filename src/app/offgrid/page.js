import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/offgrid-Components/Banner";
import LiveTickerZone from "../components/offgrid-Components/LiveTickerZone";
import TodayUpdates from "../components/offgrid-Components/TodayUpdates";
import HorizontalCard from "../components/offgrid-Components/HorizontalCard";
import GoldNewsBanner from "../components/offgrid-Components/GoldNewsBanner";
import TrustedPartners from "../components/offgrid-Components/TrustedPartners";
import ArticleSection from "../components/offgrid-Components/ArticleSection";
import { buildMetadata, buildBreadcrumbSchema } from "../seo";

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Off-Grid Security", url: "/offgrid" },
]);

export const metadata = buildMetadata({
  title: "Off-Grid Security Insights | GoldSilver.de Preparedness",
  description:
    "Discover preparedness, self-reliance, and security strategies that help readers protect wealth in uncertain economic conditions.",
  path: "/offgrid",
});

const Offgrid = () => {
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

export default Offgrid;