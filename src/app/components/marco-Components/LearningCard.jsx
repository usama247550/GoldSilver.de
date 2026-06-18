"use client";
import { useTranslation } from "react-i18next";


import React from "react";
import { FaYoutube } from "react-icons/fa";

const LearningCard = () => {
  const { t } = useTranslation();
  const learningDATA = [
    {
      title: "Pro Gold",
      description:
        "Best YouTube videos covering gold investing, bullion markets, and wealth preservation",
      link: "/macro/gold.png",
    },
    {
      title: "Pro Silver",
      description:
        "Best YouTube videos covering silver investing, industrial demand, and market opportunities.",
      link: "/macro/silver.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mx-auto px-4 sm:px-0">
      {learningDATA.map((item, ind) => (
        <div
          key={ind+1}
          className="rounded-2xl   bg-white overflow-hidden"
        >
          <div className="relative">
            <img
              src={item.link}
              alt={t(item.title)}
              className="h-48 w-full object-cover scale-x-110"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/macro/utube.webp " 
               className="w-28 h-28 md:w-36 md:h-36"
              />
            </div>
          </div>

          <div className="ps-4 py-5 bg-[#F7BD48CF] font-[Playfair-Display]">
            <h3 className="text-lg text-black sm:text-xl font-bold">{t(item.title)}</h3>
            <p className="m-2 leading-tight text-xs sm:text-sm text-[#000000]">
              {t(item.description)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningCard;