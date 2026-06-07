import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/JewelryResale-Components/Banner";
import LiveTickerZone from "../components/JewelryResale-Components/LiveTickerZone";
import TodayUpdates from "../components/JewelryResale-Components/TodayUpdates";
import GoldNewsBanner from "../components/JewelryResale-Components/GoldNewsBanner";
import TrustedPartners from "../components/JewelryResale-Components/TrustedPartners";

const JewelryResale = () => {
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

export default JewelryResale;
