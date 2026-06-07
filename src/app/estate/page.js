import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/estate-components/Banner";
import LiveTickerZone from "../components/estate-components/LiveTickerZone";
import TodayUpdates from "../components/estate-components/TodayUpdates";
import TrustedPartners from "../components/estate-components/TrustedPartners";
import GoldNewsBanner from "../components/estate-components/GoldNewsBanner";

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
