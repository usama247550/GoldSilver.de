import React from "react";

const HorizontalCard = () => {
  const marketNews = [
    {
      category: "PHYSICAL MARKET",
      date: "JUNE 01, 2026",
      tag: "Bullish",
      title: "Demand For Premium Home Safes Continues To Increase",
      description:
        "Investors seek enhanced protection for physical bullion and high-value assets.",
      image: "/storage/news.jpg",
    },
    {
      category: "PHYSICAL MARKET",
      date: "JUNE 01, 2026",
      tag: "Bullish",
      title: "Demand For Premium Home Safes Continues To Increase",
      description:
        "Investors seek enhanced protection for physical bullion and high-value assets.",
      image: "/storage/news.jpg",
    },
    {
      category: "PHYSICAL MARKET",
      date: "JUNE 01, 2026",
      tag: "Bullish",
      title: "Demand For Premium Home Safes Continues To Increase",
      description:
        "Investors seek enhanced protection for physical bullion and high-value assets.",
      image: "/storage/news.jpg",
    },
  ];
  return (
    <>
      <div className="p-3 sm:p-6">
        <div className="flex flex-col">
          {marketNews.map((item) => (
            <div
              key={item}
              className="flex gap-3 sm:gap-4 py-4 border-b border-gray-100 last:border-none"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-[#B8860B] text-xs font-semibold tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-xs hidden sm:inline">
                    •
                  </span>
                  <span className="text-[#000000] text-xs">{item.date}</span>
                  <span className="bg-[#2E7D32] text-white text-xs px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-[#000000] font-bold text-base sm:text-lg md:text-xl mb-1 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#000000] text-xs sm:text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="w-16 h-16 sm:w-24 sm:h-20 flex-shrink-0 mt-6 sm:mt-8">
                <img
                  src={item.image}
                  alt="gold"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
