import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/AiTech-components/Banner";
import LiveTickerZone from "../components/AiTech-components/LiveTickerZone";
import TodayUpdates from "../components/AiTech-components/TodayUpdates";
import TrustedPartners from "../components/AiTech-components/TrustedPartners";
import GoldNewsBanner from "../components/AiTech-components/GoldNewsBanner";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "AI & Tech Market Insights for Investors | GoldSilver.de",
  description:
    "Explore how AI, automation, and digital innovation influence capital flows, industrial demand, and the precious metals investment outlook.",
  path: "/AiTech",
});

const AiTech = () => {
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

export default AiTech;
