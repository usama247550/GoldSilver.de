
import React from "react";
import PartnerCard from "./PartnerCard";

const TrustedPartners = () => {
  return (
    <div className="w-full bg-[#FAF8F0] font-[Playfair-Display]">
      <div className="flex flex-col items-center gap-y-4 py-12 md:py-17 px-4 md:px-10">
        <h2 className="text-[#0D1B2A] font-bold text-2xl sm:text-3xl md:text-5xl text-center">
          Trusted <span className="text-[#B8860B]">Precious Metals </span>
          Partners
        </h2>
        <p className="text-md text-center max-w-md text-black">
          Explore carefully selected platforms for buying, storing, and
          investing in precious metals.
        </p>
        <div className="w-full mt-4 mb-6">
          <PartnerCard />
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;