import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/storage-components/Banner";
import LiveTickerZone from "../components/storage-components/LiveTickerZone";
import TodayUpdates from "../components/storage-components/TodayUpdates";
import TrustedPartners from "../components/storage-components/TrustedPartners";
import GoldNewsBanner from "../components/storage-components/GoldNewsBanner";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Storage Market Insights for Investors | GoldSilver.de",
  description:
    "Follow storage, logistics, and capital preservation themes that affect precious metals demand, supply chains, and long-term investment decisions.",
  path: "/storage",
});

const Storage = () => {
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

export default Storage;
