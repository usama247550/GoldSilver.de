"use client";
import { useTranslation } from "react-i18next";
import React from "react";

const PartnerCard = () => {
  const { t } = useTranslation();
  const partnerCards = [
    {
      logo: "LS",
      title: "Auction Houses",
      description:
        "Buy investment-grade gold and silver products from one of Germany’s established bullion retailers.",
      commission: "Up to 8-10% commission",
      button: "Discover More",
      link: process.env.NEXT_PUBLIC_AFFILIATE_SEEKINGALPHA,
    },
    {
      logo: "SP",
      title: "Coin Display Cases",
      description:
        "Precious metals investment solutions designed to help investors diversify and protect wealth.",
      commission: "Up to 6% commission",
      button: "Discover More",
      link: process.env.NEXT_PUBLIC_AFFILIATE_MOTLEYFOOL,
    },
    {
      logo: "SS",
      title: "Magnification Tools",
      description:
        "Purchase, store, and manage physical gold and silver through a globally trusted platform.",
      commission: "25% recurring commission",

      button: "Discover More",
      link: process.env.NEXT_PUBLIC_AFFILIATE_RESEARCH,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {partnerCards.map((item, index) => (
        <div
          key={index}
          className="border border-[#B8860B] px-4 py-6 text-center flex flex-col gap-y-4 rounded-2xl shadow-sm"
        >
          <span className="bg-[#0D1B2A] font-[Playfair_Display]  w-fit mx-auto px-4 py-2 text-white rounded-md text-sm">
            {item.logo}
          </span>

          <div className="text-[#000000] text-xl sm:text-2xl font-bold font-[Playfair_Display] ">
            {t(item.title)}
          </div>

          <div className="text-[#000000] text-sm flex-1 max-w-2lg">
            {t(item.description)}
          </div>

          <div className="text-[#B8860B] font-medium text-sm">
            {t(item.commission)}
          </div>

          <a
            href={item.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-[#B8860B] border-2 border-[#B8860B] rounded-md text-sm font-bold py-2 hover:bg-[#B8860B] hover:text-black transition cursor-pointer block text-center"
          >
            {t(item.button)}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PartnerCard;
