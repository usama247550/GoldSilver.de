"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import GooglePreferenceButton from "../common/GooglePreferenceButton";
import { buildArticleSchema } from "../../seo";
const ArticleSection = () => {
  const { t } = useTranslation();
const articleSchema = buildArticleSchema({
  headline: "Wealth Management and Alternative Investments Through Macro Trends",
  description: "Explore alternative investments and wealth management strategies through central bank gold buying, inflation protection, currencies, and geopolitical macro trends shaping precious metals prices.",
  path: "/macro",
});
  return (
    <div className="w-full bg-white py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h2 className="text-[#1A1A1A] font-bold text-2xl md:text-3xl font-[Playfair_Display] mb-4">
          {t("macroArticleTitle")}
        </h2>

        <div className="mb-6">
          <GooglePreferenceButton />
        </div>

        <div className="text-[#333333] text-base leading-relaxed space-y-4">
          <p>{t("macroPara1")}</p>
          <p>{t("macroPara2")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("macroSubhead1")}</h3>
          <p>{t("macroPara3")}</p>
          <h3 className="text-xl font-bold mt-6 mb-2">{t("macroSubhead2")}</h3>
          <p>{t("macroPara4")}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;