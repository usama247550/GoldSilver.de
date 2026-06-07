import React from "react";
import LearningCard from "./LearningCard";

const LearningResources = () => {
  return (
    <div className="bg-[#FAF8F0] w-full font-[Playfair-Display] flex justify-center items-center pt-12 md:pt-15 pb-8 gap-y-8 flex-col  px-4 md:px-10">
      <div className="text-center max-w-2xl">
        <h2 className="text-[#000000] font-bold text-3xl sm:text-4xl md:text-[49px] leading-tight">
          Featured <span className="text-[#B8860B]">Learning </span>Resources
        </h2>
        <p className="text-[#000000] text-sm sm:text-base mt-2">
          Watch curated educational content covering gold, silver, market
          trends, and investing strategies.
        </p>
      </div>
      <div className="flex gap-6 md:gap-10 justify-center items-center flex-wrap w-full">
        <LearningCard />
      </div>
    </div>
  );
};

export default LearningResources;
