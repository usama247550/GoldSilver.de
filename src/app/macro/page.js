import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/marco-Components/Banner";
import LiveTickerZone from "../components/marco-Components/LiveTickerZone";
import TodayUpdates from "../components/marco-Components/TodayUpdates";
import GoldNewsBanner from "../components/marco-Components/GoldNewsBanner";
import TrustedPartners from "../components/marco-Components/TrustedPartners";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Macro Market Insights | GoldSilver.de Economic Trends",
  description:
    "Track central banks, inflation, currencies, and geopolitical shifts shaping gold and silver prices with concise, investor-focused macro analysis.",
  path: "/macro",
});
import LearningResources from "../components/marco-Components/LearningResources";

const Macro = () => {
  return (
    <>
      <Header />
      <Banner />
      <LiveTickerZone />
      <TodayUpdates />
      <LearningResources />
      <TrustedPartners />
      <GoldNewsBanner />
      <Footer />
    </>
  );
};

export default Macro;
