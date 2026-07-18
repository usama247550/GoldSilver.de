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
  title: "Wealth Management & Alternative Investments | Gold Macro Insights | GoldSilver.de",
  description:
    "Explore alternative investments and wealth management strategies through central bank gold buying, inflation protection, currencies, and geopolitical macro trends shaping precious metals prices.",
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
