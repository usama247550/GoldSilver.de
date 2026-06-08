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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto px-4 sm:px-0">
      {learningDATA.map((item, ind) => (
        <div
          key={ind}
          className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
        >
          <div className="relative">
            <img
              src={item.link}
              alt={t(item.title)}
              className="h-40 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaYoutube className="text-red-600 text-5xl sm:text-6xl" />
            </div>
          </div>

          <div className="ps-4 py-3 bg-[#F7BD48CF] font-[Playfair-Display]">
            <h3 className="text-lg text-black sm:text-xl font-bold">{t(item.title)}</h3>
            <p className="mt-2 leading-tight text-xs sm:text-sm text-gray-600">
              {t(item.description)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningCard;