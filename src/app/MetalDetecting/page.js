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
  title: "Metal Detecting & Treasure Detector Guide | GoldSilver.de",
  description:
    "Find the right treasure detector for coin, jewelry, and precious metal recovery. Expert metal detecting guides connecting hobbyists to real collectible value.",
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
