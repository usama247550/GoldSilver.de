import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/metalDetecting-Components/Banner";
import LiveTickerZone from "../components/metalDetecting-Components/LiveTickerZone";
import TodayUpdates from "../components/metalDetecting-Components/TodayUpdates";
import GoldNewsBanner from "../components/metalDetecting-Components/GoldNewsBanner";
import TrustedPartners from "../components/metalDetecting-Components/TrustedPartners";

const MetalDetecting = () => {
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

export default MetalDetecting;
