import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/estate-components/Banner";
import LiveTickerZone from "../components/estate-components/LiveTickerZone";
import TodayUpdates from "../components/estate-components/TodayUpdates";
import HorizontalCard from "../components/estate-components/HorizontalCard";
import TrustedPartners from "../components/estate-components/TrustedPartners";
import GoldNewsBanner from "../components/estate-components/GoldNewsBanner";
import { buildMetadata } from "../seo";
import ArticleSection from "../components/estate-components/ArticleSection";

export const metadata = buildMetadata({
  title: "Vermögen & Estate Planning Insights | GoldSilver.de",
  description:
    "Learn how estate planning, Vermögen (wealth) transfer strategy, and inheritance considerations affect long-term precious metals ownership and family assets.",
  path: "/estate",
});

const Estate = () => {
  return (
    <>
      <Header />
      <Banner />
      <LiveTickerZone />
      <TodayUpdates horizontalCard={<HorizontalCard />} />
      <TrustedPartners />
      <ArticleSection />
      <GoldNewsBanner />
      <Footer />
    </>
  );
};

export default Estate;