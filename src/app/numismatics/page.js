

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/numismatics-Components/Banner";
import LiveTickerZone from "../components/numismatics-Components/LiveTickerZone";
import TodayUpdates from "../components/numismatics-Components/TodayUpdates";
import HorizontalCard from "../components/numismatics-Components/HorizontalCard";
import GoldNewsBanner from "../components/numismatics-Components/GoldNewsBanner";
import TrustedPartners from "../components/numismatics-Components/TrustedPartners";
import { buildMetadata } from "../seo";
import ArticleSection from "../components/numismatics-Components/ArticleSection";

export const metadata = buildMetadata({
  title: "Coin Collecting Market Insights | Numismatics & Krügerrand | GoldSilver.de",
  description:
    "Explore the coin collecting market including Krügerrand, rarity, grading, and historical value insights for numismatists seeking tangible stores of wealth.",
  path: "/numismatics",
});

const Numismatics = () => {
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

export default Numismatics;