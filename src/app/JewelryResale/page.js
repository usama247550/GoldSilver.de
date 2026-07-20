
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/JewelryResale-Components/Banner";
import LiveTickerZone from "../components/JewelryResale-Components/LiveTickerZone";
import TodayUpdates from "../components/JewelryResale-Components/TodayUpdates";
import HorizontalCard from "../components/JewelryResale-Components/HorizontalCard";
import GoldNewsBanner from "../components/JewelryResale-Components/GoldNewsBanner";
import TrustedPartners from "../components/JewelryResale-Components/TrustedPartners";
import ArticleSection from "../components/JewelryResale-Components/ArticleSection";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Jewelry Resale Insights | GoldSilver.de Precious Metals",
  description:
    "Learn how jewelry resale, melt value, and market pricing affect decisions for sellers, buyers, and precious metals investors.",
  path: "/JewelryResale",
});

const JewelryResale = () => {
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

export default JewelryResale;