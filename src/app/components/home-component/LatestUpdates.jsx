"use client";
import { useState, useEffect } from "react";

const fetchNews = async () => {
  const res = await fetch('/api/news');
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
};
import { useTranslation } from "react-i18next";
import LatestUpdateCard from "./LatestUpdateCard";

const LatestUpdates = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch news', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full max-w-8xl bg-white font-[PLAYFAIR] gap-y-4 py-12 md:mt-10 flex flex-col justify-center items-center px-5 md:px-12">
      
      {/* TITLE */}
      <h2 className="text-[#1A1A1A] font-bold text-2xl sm:text-3xl md:text-5xl text-center">
        {t("Latest")}{" "}
        <span className="text-[#B8860B]">{t("Insights")}</span>{" "}
        {t("& Updates")}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-[#000000] text-sm sm:text-base md:text-base text-center max-w-4xl">
        {t(
          "Expert analysis, market movements, and emerging opportunities across gold, silver, and the broader economic landscape."
        )}
      </p>

      {/* CARDS */}
      <div className="w-full my-6">
        {loading ? (
          <p className="text-center">Loading news...</p>
        ) : (
          <LatestUpdateCard showAll={showAll} newsItems={newsItems} />
        )}
      </div>

      {/* BUTTON */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="text-[#B8860B] text-lg sm:text-xl md:text-2xl font-semibold underline decoration-2 underline-offset-4 decoration-[#B8860B]"
        >
          {t("Browse all articles")}
        </button>
      )}
    </div>
  );
};

export default LatestUpdates;