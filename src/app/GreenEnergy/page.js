

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/GreenEnergy-Components/Banner";
import LiveTickerZone from "../components/GreenEnergy-Components/LiveTickerZone";
import TodayUpdates from "../components/GreenEnergy-Components/TodayUpdates";
import HorizontalCard from "../components/GreenEnergy-Components/HorizontalCard";
import TrustedPartners from "../components/GreenEnergy-Components/TrustedPartners";
import ArticleSection from "../components/GreenEnergy-Components/ArticleSection";
import GoldNewsBanner from "../components/GreenEnergy-Components/GoldNewsBanner";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Green Energy & Silver Demand Insights | GoldSilver.de",
  description:
    "Understand how solar, electrification, and climate technology trends are increasing industrial silver demand across global markets.",
  path: "/GreenEnergy",
});

const GreenEnergy = () => {
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

export default GreenEnergy;