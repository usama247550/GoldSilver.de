// "use client";

// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import LatestUpdateCard from "./LatestUpdateCard";

// const fetchLatestNews = async () => {
//   console.log("Fetching latest news...");

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/news/random?limit=10`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch news");
//   }

//   const data = await res.json();
//   console.log("Fetched news data:", data);

//   return data;
// };

// const LatestUpdates = () => {
//   const { t } = useTranslation();

//   const [showAll, setShowAll] = useState(false);
//   const [allNews, setAllNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadNews = async () => {
//       try {
//         console.log("Loading latest news...");

//         const data = await fetchLatestNews();

//         setAllNews(data);
//       } catch (err) {
//         console.error("Failed to fetch news:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadNews();
//   }, []);

//   return (
//     <div className="w-full max-w-8xl bg-white font-[PLAYFAIR] gap-y-4 py-12 md:mt-10 flex flex-col justify-center items-center px-5 md:px-12">
//       <h2 className="text-[#1A1A1A] font-bold text-2xl sm:text-3xl md:text-5xl text-center">
//         {t("Latest")} <span className="text-[#B8860B]">{t("Insights")}</span>{" "}
//         {t("& Updates")}
//       </h2>

//       <p className="text-[#000000] text-sm sm:text-base md:text-base text-center max-w-4xl">
//         {t(
//           "Expert analysis, market movements, and emerging opportunities across gold, silver, and the broader economic landscape."
//         )}
//       </p>

//       <div className="w-full my-6">
//         {loading ? (
//           <p className="text-center">Loading news...</p>
//         ) : (
//           <LatestUpdateCard newsItems={allNews} showAll={showAll} />
//         )}
//       </div>

//       {!loading && allNews.length > 3 && (
//         <button
//           onClick={() => setShowAll((prev) => !prev)}
//           className="text-[#B8860B] text-lg sm:text-xl md:text-2xl font-semibold underline decoration-2 underline-offset-4 decoration-[#B8860B]"
//         >
//           {showAll ? t("Show less") : t("Browse all articles")}
//         </button>
//       )}
//     </div>
//   );
// };

// export default LatestUpdates;


import LatestUpdatesClient from "./LatestUpdatesClient";

const LatestUpdates = async () => {
  let allNews = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/news/random?limit=10`,
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      allNews = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch news:", err);
  }

  return <LatestUpdatesClient allNews={allNews} />;
};

export default LatestUpdates;