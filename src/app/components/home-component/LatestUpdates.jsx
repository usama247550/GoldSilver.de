import React from "react";
import LatestUpdateCard from "./LatestUpdateCard";

const LatestUpdates = () => {
  return (
    <div className="w-full bg-white font-[PLAYFAIR] gap-y-4 py-12 md:my-10 flex flex-col justify-center items-center px-5 md:px-45">
      <h2 className="text-[#1A1A1A] font-bold text-2xl sm:text-3xl md:text-5xl text-center">
        Latest <span className="text-[#B8860B]">Insights</span> & Updates
      </h2>
      <p className="text-[#000000] text-sm sm:text-base text-center max-w-xl">
        Expert analysis, market movements, and emerging opportunities across
        gold, silver, and the broader economic landscape.
      </p>
      <div className="w-full my-6">
        <LatestUpdateCard />
      </div>
      <a
        href="#"
        className="text-[#B8860B] text-lg sm:text-xl md:text-2xl font-semibold underline decoration-2 underline-offset-4 decoration-[#B8860B]"
      >
        Browse all articles
      </a>
    </div>
  );
};

export default LatestUpdates;
