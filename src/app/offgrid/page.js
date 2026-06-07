import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/offgrid-Components/Banner";
import LiveTickerZone from "../components/offgrid-Components/LiveTickerZone";
import TodayUpdates from "../components/offgrid-Components/TodayUpdates";
import GoldNewsBanner from "../components/offgrid-Components/GoldNewsBanner";
import TrustedPartners from "../components/offgrid-Components/TrustedPartners";

const Macro = () => {
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

export default Macro;
