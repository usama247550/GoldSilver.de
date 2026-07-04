import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/metalDetecting-Components/Banner";
import LiveTickerZone from "../components/metalDetecting-Components/LiveTickerZone";
import TodayUpdates from "../components/metalDetecting-Components/TodayUpdates";
import GoldNewsBanner from "../components/metalDetecting-Components/GoldNewsBanner";
import TrustedPartners from "../components/metalDetecting-Components/TrustedPartners";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Metal Detecting Insights | GoldSilver.de Treasure Finds",
  description:
    "Explore metal detecting, treasure recovery, and hidden-value discoveries connected to collectible coins, jewelry, and precious metals.",
  path: "/MetalDetecting",
});

const MetalDetecting = () => {
  return (
    <>
      <Header />
      <Banner />
      <LiveTickerZone />
      <TodayUpdates />
      <TrustedPartners />
      <GoldNewsBanner />
      <Footer />
    </>
  );
};

export default MetalDetecting;
