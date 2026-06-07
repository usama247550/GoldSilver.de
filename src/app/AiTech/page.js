import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/AiTech-Components/Banner";
import LiveTickerZone from "../components/AiTech-Components/LiveTickerZone";
import TodayUpdates from "../components/AiTech-Components/TodayUpdates";
import TrustedPartners from "../components/AiTech-Components/TrustedPartners";
import GoldNewsBanner from "../components/AiTech-Components/GoldNewsBanner";

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
