import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/marco-Components/Banner";
import LiveTickerZone from "../components/marco-Components/LiveTickerZone";
import TodayUpdates from "../components/marco-Components/TodayUpdates";
import GoldNewsBanner from "../components/marco-Components/GoldNewsBanner";
import TrustedPartners from "../components/marco-Components/TrustedPartners";
import LearningResources from "../components/marco-Components/LearningResources";

const Macro = () => {
  return (
    <>
      <Header />
      <Banner />
      <LiveTickerZone />
      <TodayUpdates />
      <LearningResources />
      <TrustedPartners />
      <GoldNewsBanner />
      <Footer />
    </>
  );
};

export default Macro;
