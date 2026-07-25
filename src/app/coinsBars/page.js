import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/ConinsBar-Components/Banner";
import LiveTickerZone from "../components/ConinsBar-Components/LiveTickerZone";
import TodayUpdates from "../components/ConinsBar-Components/TodayUpdates";
import HorizontalCard from "../components/ConinsBar-Components/HorizontalCard";
import GoldNewsBanner from "../components/ConinsBar-Components/GoldNewsBanner";
import TrustedPartners from "../components/ConinsBar-Components/TrustedPartners";
import { buildMetadata } from "../seo";
import ArticleSection from "../components/ConinsBar-Components/ArticleSection";

export const metadata = buildMetadata({
  title: "Buy Gold and Silver Coins and Bars | Goldmünzen & Goldbarren | GoldSilver.de",
  description:
    "Buy gold and silver coins and bars including Krügerrand, Goldbarren, and Silbermünzen. Compare bullion for liquidity, purity, and long-term value preservation.",
  path: "/coinsBars",
});

const ConinsBar = () => {
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

export default ConinsBar;