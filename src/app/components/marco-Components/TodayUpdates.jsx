
"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import PriceTable from "./PriceTable";

const TodayUpdates = ({ horizontalCard }) => {
  const { t } = useTranslation();
  return (
    <section id="today-news" className="bg-[#FAF8F0] max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="lg:col-span-3">
          <h2 className="text-[#1A1A1A] text-2xl sm:text-3xl md:text-5xl font-bold ps-2 sm:ps-5 mt-10 md:mt-20 font-[Playfair-Display]">
            {t("Today's Update")}
          </h2>
          {horizontalCard}
        </div>

        <div className="lg:col-span-2 lg:self-start lg:mt-28 mb-10">
          <PriceTable />
        </div>
      </div>
    </section>
  );
};

export default TodayUpdates;