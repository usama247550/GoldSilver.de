import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/numismatics-Components/Banner";
import LiveTickerZone from "../components/numismatics-Components/LiveTickerZone";
import TodayUpdates from "../components/numismatics-Components/TodayUpdates";
import GoldNewsBanner from "../components/numismatics-Components/GoldNewsBanner";
import TrustedPartners from "../components/numismatics-Components/TrustedPartners";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Numismatics Insights | GoldSilver.de Coin Collecting",
  description:
    "Browse coin collecting, rarity, grading, and historical value insights for numismatists interested in tangible stores of wealth.",
  path: "/numismatics",
});

const Numismatics = () => {
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

export default Numismatics;
