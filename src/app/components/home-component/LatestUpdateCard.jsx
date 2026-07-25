"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PAGE_MAP = {
  sp1: "/macro",
  sp2: "/AiTech",
  sp3: "/storage",
  sp4: "/estate",
  sp5: "/GreenEnergy",
  sp6: "/scrapMetal",
  sp7: "/offgrid",
  sp8: "/numismatics",
  sp9: "/MetalDetecting",
  sp10: "/Goldsmithing",
  sp11: "/JewelryResale",
  sp12: "/coinsBars",
};

const CATEGORY_LABELS = {
  sp1: "Macro",
  sp2: "AI & Tech",
  sp3: "Storage",
  sp4: "Real Estate",
  sp5: "Green Energy",
  sp6: "Scrap",
  sp7: "Off-Grid",
  sp8: "Numismatics",
  sp9: "Metal Detecting",
  sp10: "Goldsmith",
  sp11: "Jewelry",
  sp12: "Bullion",
};


const CATEGORY_IMAGES = {
  sp1: "/newsbanner/img3.webp",
  sp2: "/aiTech/news.webp",
  sp3: "/storage/news.webp",
  sp4: "/estate/banner.webp",
  sp5: "/greenEnergy/news.webp",
  sp6: "/grid-images/gridimage3.webp",
  sp7: "/offgrid/news.webp",
  sp8: "/numismatics/news.webp",
  sp9: "/metalDetecting/news.webp",
  sp10: "/Goldsmithing/news.webp",
  sp11: "/JewelryResale/news.webp",
  sp12: "/bar&coins/news.webp",
};

const LatestUpdateCard = ({ showAll = false, newsItems = [] }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const visibleNews = showAll ? newsItems : newsItems.slice(0, 3);

  if (!visibleNews.length) {
    return <p className="text-center text-gray-500">No news available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:max-w-5xl md:mx-auto">
      {visibleNews.map((news) => (
        <div
          key={news._id}
          onClick={() => router.push(PAGE_MAP[news.subpageId] ?? "/")}
          className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
        >
          <div className="relative w-full h-48 sm:h-52">
            <Image
              src={CATEGORY_IMAGES[news.subpageId] ?? "/aiTech/news.jpg"}
              alt={news.headline}
              fill
              className="object-cover"
            />

            <div
              className={`absolute top-4 left-4 px-2.5 py-1 text-xs text-white uppercase tracking-wider ${
                news.conclusion === "bearish"
                  ? "bg-[#C62828]"
                  : news.conclusion === "bullish"
                    ? "bg-[#2E7D32]"
                    : "bg-gray-500"
              }`}
            >
              {news.conclusion}{" "}
              {news.conclusion === "bearish"
                ? "▼"
                : news.conclusion === "bullish"
                  ? "▲"
                  : ""}
            </div>
          </div>

          <div className="p-4 space-y-2 flex flex-col flex-1">
            <p className="text-sm text-[#B8860B] font-bold">
              {t(CATEGORY_LABELS[news.subpageId] ?? news.subpageId)}
            </p>

            <h2 className="text-lg text-gray-800 font-[Playfair] font-semibold leading-snug line-clamp-2">
              {t(news.headline)}
            </h2>

            <p className="text-sm text-black flex-1 line-clamp-3">
              {t(news.summary)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestUpdateCard;
