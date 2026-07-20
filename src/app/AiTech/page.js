import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/AiTech-components/Banner";
import LiveTickerZone from "../components/AiTech-components/LiveTickerZone";
import TodayUpdates from "../components/AiTech-components/TodayUpdates";
import HorizontalCard from "../components/AiTech-components/HorizontalCard";
import TrustedPartners from "../components/AiTech-components/TrustedPartners";
import ArticleSection from "../components/AiTech-components/ArticleSection";
import GoldNewsBanner from "../components/AiTech-components/GoldNewsBanner";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "AI & Tech Market Insights for Investors | GoldSilver.de",
  description:
    "Explore how AI, automation, and digital innovation influence capital flows, industrial demand, and the precious metals investment outlook.",
  path: "/AiTech",
});

const AiTech = () => {
  return (
    <>
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

export default AiTech;