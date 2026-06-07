import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/scrap-Components/Banner";
import LiveTickerZone from "../components/scrap-Components/LiveTickerZone";
import TodayUpdates from "../components/scrap-Components/TodayUpdates";
import GoldNewsBanner from "../components/scrap-Components/GoldNewsBanner";
import TrustedPartners from "../components/scrap-Components/TrustedPartners";

const scrapMetal = () => {
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

export default scrapMetal;
