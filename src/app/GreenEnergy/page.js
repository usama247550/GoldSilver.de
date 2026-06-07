import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/GreenEnergy-Components/Banner";
import LiveTickerZone from "../components/GreenEnergy-Components/LiveTickerZone";
import TodayUpdates from "../components/GreenEnergy-Components/TodayUpdates";
import GoldNewsBanner from "../components/GreenEnergy-Components/GoldNewsBanner";
import TrustedPartners from "../components/GreenEnergy-Components/TrustedPartners";

const GreenEnergy = () => {
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

export default GreenEnergy;
