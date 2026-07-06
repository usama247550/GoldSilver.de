import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/ConinsBar-Components/Banner";
import LiveTickerZone from "../components/ConinsBar-Components/LiveTickerZone";
import TodayUpdates from "../components/ConinsBar-Components/TodayUpdates";
import GoldNewsBanner from "../components/ConinsBar-Components/GoldNewsBanner";
import TrustedPartners from "../components/ConinsBar-Components/TrustedPartners";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Coins & Bars Investment Insights for Buyers | GoldSilver.de",
  description:
    "Compare bullion, coins, and bars with practical insights for buyers seeking liquidity, purity, and long-term value preservation.",
  path: "/coinsBars",
});

const ConinsBar = () => {
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

export default ConinsBar;
