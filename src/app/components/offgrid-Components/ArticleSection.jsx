"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import GooglePreferenceButton from "../common/GooglePreferenceButton";
import { buildArticleSchema } from "../../seo";
const ArticleSection = () => {
  const { t } = useTranslation();
const articleSchema = buildArticleSchema({
  headline: "Fractional Gold and Silver for Self-Reliance and Emergency Preparedness",
  description: "Discover preparedness, self-reliance, and security strategies that help readers protect wealth in uncertain economic conditions.",
  path: "/offgrid",
});
  return (
    <div className="w-full bg-white py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h2 className="text-[#1A1A1A] font-bold text-2xl md:text-3xl font-[Playfair_Display] mb-4">
          {t("offgridArticleTitle")}
        </h2>

        <div className="mb-6">
          <GooglePreferenceButton />
        </div>

        <div className="text-[#333333] text-base leading-relaxed space-y-4">
          <p>{t("offgridPara1")}</p>
          <p>{t("offgridPara2")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("offgridSubhead1")}</h3>
          <p>{t("offgridPara3")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("offgridSubhead2")}</h3>
          <p>{t("offgridPara4")}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;