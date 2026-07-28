import React from "react";
import Image from "next/image";
import NewsCardTrackable from "./NewsCardTrackable";

const HorizontalCard = async () => {
  let marketNews = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news/sp4`, {
      next: { revalidate: 3600 },
    });
    marketNews = await res.json();
  } catch (err) {
    console.error("News fetch error:", err);
  }

  if (!marketNews || marketNews.length === 0) {
    return <p className="p-6 text-gray-400">No news today</p>;
  }

  return (
    <div className="p-3 sm:p-6">
      <div className="flex flex-col">
        {marketNews.map((item, index) => (
          <NewsCardTrackable item={item} key={index}>
            <div className="flex gap-3 sm:gap-4 py-4 border-b border-gray-100 last:border-none">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-5">
                  <span className="text-[#B8860B] text-md tracking-wide">
                    PHYSICAL MARKET
                  </span>
                  <span className="text-gray-400 text-xs hidden sm:inline">
                    •
                  </span>
                  <span className="text-[#000000] text-xs">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                      timeZone: "Asia/Karachi",
                    })}
                  </span>
                  <span
                    className={`text-white text-xs px-2 py-0.5 rounded ${
                      item.conclusion === "bullish"
                        ? "bg-[#2E7D32]"
                        : item.conclusion === "bearish"
                          ? "bg-red-600"
                          : "bg-gray-500"
                    }`}
                  >
                    {item.conclusion?.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-[#000000] w-[96%] font-bold text-base sm:text-lg md:text-xl mb-1 leading-snug line-clamp-2">
                  {item.headline || item.summary?.slice(0, 80)}
                </h3>

                <p className="text-[#000000] w-[96%] text-xs sm:text-sm line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="relative md:w-32 md:h-24 w-24 h-32 sm:w-32 sm:h-32 flex-shrink-0 mt-8 sm:mt-8 overflow-hidden rounded-xl">
                <Image
                  src="/estate/news.webp"
                  alt="gold"
                  fill
                  sizes="(max-width: 768px) 96px, 128px"
                  className="object-cover"
                />
              </div>
            </div>
          </NewsCardTrackable>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;
