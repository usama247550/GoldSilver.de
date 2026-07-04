import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/estate-components/Banner";
import LiveTickerZone from "../components/estate-components/LiveTickerZone";
import TodayUpdates from "../components/estate-components/TodayUpdates";
import TrustedPartners from "../components/estate-components/TrustedPartners";
import GoldNewsBanner from "../components/estate-components/GoldNewsBanner";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Estate Planning Insights | GoldSilver.de Wealth Topics",
  description:
    "Learn how estate planning, inheritance strategy, and wealth transfer considerations affect long-term precious metals ownership and family assets.",
  path: "/estate",
});

const Estate = () => {
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

export default Estate;
