import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/ConinsBar-Components/Banner";
import LiveTickerZone from "../components/ConinsBar-Components/LiveTickerZone";
import TodayUpdates from "../components/ConinsBar-Components/TodayUpdates";
import GoldNewsBanner from "../components/ConinsBar-Components/GoldNewsBanner";
import TrustedPartners from "../components/ConinsBar-Components/TrustedPartners";

const ConinsBar = () => {
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

export default ConinsBar;
