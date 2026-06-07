import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/Goldsmithing-Components/Banner";
import LiveTickerZone from "../components/Goldsmithing-Components/LiveTickerZone";
import TodayUpdates from "../components/Goldsmithing-Components/TodayUpdates";
import GoldNewsBanner from "../components/Goldsmithing-Components/GoldNewsBanner";
import TrustedPartners from "../components/Goldsmithing-Components/TrustedPartners";

const Goldsmithing = () => {
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

export default Goldsmithing;
