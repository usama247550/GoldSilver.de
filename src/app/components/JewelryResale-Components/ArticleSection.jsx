"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import GooglePreferenceButton from "../common/GooglePreferenceButton";

const ArticleSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h2 className="text-[#1A1A1A] font-bold text-2xl md:text-3xl font-[Playfair_Display] mb-4">
          {t("jewelryResaleArticleTitle")}
        </h2>

        <div className="mb-6">
          <GooglePreferenceButton />
        </div>

        <div className="text-[#333333] text-base leading-relaxed space-y-4">
          <p>{t("jewelryResalePara1")}</p>
          <p>{t("jewelryResalePara2")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("jewelryResaleSubhead1")}</h3>
          <p>{t("jewelryResalePara3")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("jewelryResaleSubhead2")}</h3>
          <p>{t("jewelryResalePara4")}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;