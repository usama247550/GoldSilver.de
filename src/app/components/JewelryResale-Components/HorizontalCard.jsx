// "use client";
// import { useTranslation } from "react-i18next";
// import React from "react";

// const HorizontalCard = () => {
//   const { t } = useTranslation();
//   const marketNews = [
//     {
//       category: "PHYSICAL MARKET",
//       date: "JUNE 01, 2026",
//       tag: "Bullish",
//       title: "Luxury Resale Market Shows Continued Growth Momentum",
//       description:
//         "Demand for certified pre-owned jewelry remains strong across global markets.",
//       image: "/JewelryResale/news.jpg",
//     },
//     {
//       category: "PHYSICAL MARKET",
//       date: "JUNE 01, 2026",
//       tag: "Bullish",
//       title: "Luxury Resale Market Shows Continued Growth Momentum",
//       description:
//         "Demand for certified pre-owned jewelry remains strong across global markets.",
//       image: "/JewelryResale/news.jpg",
//     },
//     {
//       category: "PHYSICAL MARKET",
//       date: "JUNE 01, 2026",
//       tag: "Bullish",
//       title: "Luxury Resale Market Shows Continued Growth Momentum",
//       description:
//         "Demand for certified pre-owned jewelry remains strong across global markets.",
//       image: "/JewelryResale/news.jpg",
//     },
//   ];
//   return (
//     <>
//       <div className="p-3 sm:p-6">
//         <div className="flex flex-col">
//           {marketNews.map((item) => (
//             <div
//               key={" "}
//               className="flex gap-3 sm:gap-4 py-4 border-b border-gray-100 last:border-none"
//             >
//               <div className="flex-1 min-w-0">
//                 <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
//                   <span className="text-[#B8860B] text-xs font-semibold tracking-wide">
//                     {t(item.category)}
//                   </span>
//                   <span className="text-gray-400 text-xs hidden sm:inline">
//                     •
//                   </span>
//                   <span className="text-[#000000] text-xs">{t(item.date)}</span>
//                   <span className="bg-[#2E7D32] text-white text-xs px-2 py-0.5 rounded">
//                     {t(item.tag)}
//                   </span>
//                 </div>

//                 <h3 className="text-[#000000] font-bold text-base sm:text-lg md:text-xl mb-1 leading-snug">
//                   {t(item.title)}
//                 </h3>

//                 <p className="text-[#000000] text-xs sm:text-sm line-clamp-2">
//                   {t(item.description)}
//                 </p>
//               </div>

//               <div className="w-16 h-16 sm:w-24 sm:h-20 flex-shrink-0 mt-6 sm:mt-8">
//                 <img
//                   src={item.image}
//                   alt="gold"
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HorizontalCard;

"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

const HorizontalCard = () => {
  const { t } = useTranslation();
  const [marketNews, setMarketNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/news/sp11`)
      .then(res => res.json())
      .then(data => {
        setMarketNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6 text-gray-400">Loading...</p>;
  if (marketNews.length === 0) return <p className="p-6 text-gray-400">No news today</p>;

  return (
    <div className="p-3 sm:p-6">
      <div className="flex flex-col">
        {marketNews.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 sm:gap-4 py-4 border-b border-gray-100 last:border-none"
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                <span className="text-[#B8860B] text-xs font-semibold tracking-wide">
                  PHYSICAL MARKET
                </span>
                <span className="text-gray-400 text-xs hidden sm:inline">•</span>
                <span className="text-[#000000] text-xs">
                  {new Date(item.date).toLocaleDateString('en-US', { 
                    month: 'long', day: '2-digit', year: 'numeric' 
                  })}
                </span>
                <span className={`text-white text-xs px-2 py-0.5 rounded ${
                  item.conclusion === 'bullish' ? 'bg-[#2E7D32]' : 
                  item.conclusion === 'bearish' ? 'bg-red-600' : 'bg-gray-500'
                }`}>
                  {item.conclusion?.toUpperCase()}
                </span>
              </div>

              <h3 className="text-[#000000] font-bold text-base sm:text-lg md:text-xl mb-1 leading-snug">
                {item.headline || item.summary?.slice(0, 80)}
              </h3>

              <p className="text-[#000000] text-xs sm:text-sm line-clamp-2">
                {item.summary}
              </p>
            </div>

            <div className="w-16 h-16 sm:w-24 sm:h-20 flex-shrink-0 mt-6 sm:mt-8">
              <img
                src="/newsbanner/img3.jpg"
                alt="gold"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;