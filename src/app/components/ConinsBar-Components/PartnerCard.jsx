"use client";
import { useTranslation } from "react-i18next";
import React from "react";

const PartnerCard = () => {
  const { t } = useTranslation();
  const partnerCards = [
    {
      logo: "GS",
      title: "Seeking Alpha",
      description:
        "Buy investment-grade gold and silver products from one of Germany’s established bullion retailers.",
      commission: "Up to 8-10% commission",
      button: "Discover More",
    },
    {
      logo: "AP",
      title: "Motley Fool",
      description:
        "Precious metals investment solutions designed to help investors diversify and protect wealth.",
      commission: "Up to 6% commission",
      button: "Discover More",
    },
    {
      logo: "BV",
      title: "Research Newsletters",
      description:
        "Purchase, store, and manage physical gold and silver through a globally trusted platform.",
      commission: "25% recurring commission",

      button: "Discover More",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {partnerCards.map((item, index) => (
        <div
          key={index}
          className="border border-[#B8860B] px-5 py-7 text-center flex flex-col gap-y-4 rounded-2xl shadow-sm"
        >
          <span className="bg-black w-fit mx-auto px-4 py-2 text-white rounded-md text-sm">
            {item.logo}
          </span>

          <div className="text-[#000000] text-xl sm:text-2xl font-bold">
            {t(item.title)}
          </div>

          <div className="text-[#000000] text-sm flex-1">
            {t(item.description)}
          </div>

          <div className="text-[#B8860B] font-medium text-sm">
            {t(item.commission)}
          </div>

          <button className="mt-2 text-[#B8860B] border-2 border-[#B8860B] rounded-md text-sm font-bold py-2 hover:bg-[#B8860B] hover:text-black transition cursor-pointer">{t("Read More")}</button>
        </div>
      ))}
    </div>
  );
};

export default PartnerCard;
