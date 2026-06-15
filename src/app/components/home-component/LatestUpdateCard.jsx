"use client";
import { useTranslation } from "react-i18next";

const LatestUpdateCard = () => {
  const { t } = useTranslation();
  const updatedNews = [
    {
      image: "/news-update-image/image2.png",
      small: "Macro insight",
      heading: "Central Banks Continue Gold Buying Trend",
      decription:
        "Reserve accumulation remains strong as global institutions seek stability amid economic uncertainty.",
      badge: { text: "BEARISH", type: "bearish" },
    },
    {
      image: "/news-update-image/image1.png",
      small: "Energy",
      heading: "Solar Expansion Drives Silver Demand Higher",
      decription:
        "Growing renewable energy projects continue to increase industrial silver consumption worldwide.",
      badge: { text: "Bullish", type: "bullish" },
    },
    {
      image: "/news-update-image/image1.png",
      small: "Scrap Metal",
      heading: "German Bullion Sales Reach New Monthly High",
      decription:
        "Investor interest in physical gold and silver remains elevated across retail markets.",
      badge: { text: "Bullish", type: "bullish" },
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:max-w-5xl md:mx-auto">
      {updatedNews.map((val, ind) => (
        <div
          key={ind}
          className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
        >
          <div className="relative">
            <img
              src={val.image}
              alt="Latest update"
              className="w-full h-48 sm:h-52 object-cover rounded-t-xl"
            />
            {val.badge && (
              <div
                className={`absolute top-4 left-4 px-2.5 py-1 text-xs text-[#FFFFFF] uppercase tracking-wider ${
                  val.badge.type === "bearish" ? "bg-[#C62828]" : "bg-[#2E7D32]"
                }`}
              >
                {val.badge.text} {val.badge.type === "bearish" ? "▼" : "▲"}
              </div>
            )}
          </div>
          <div className="p-4 space-y-2 flex flex-col flex-1">
            <p className="text-sm text-[#B8860B] capitalize font-bold">
              {t(val.small)}
            </p>
            <h2 className="text-lg text-gray-800 font-[Playfair] font-semibold leading-snug">
              {t(val.heading)}
            </h2>
            <p className="text-sm text-[#000000] flex-1">{t(val.decription)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestUpdateCard;
