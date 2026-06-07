import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/storage-components/Banner";
import LiveTickerZone from "../components/storage-Components/LiveTickerZone";
import TodayUpdates from "../components/storage-Components/TodayUpdates";
import TrustedPartners from "../components/storage-Components/TrustedPartners";
import GoldNewsBanner from "../components/storage-Components/GoldNewsBanner";

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
