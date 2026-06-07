import React from "react";

const Banner = () => {
  return (
    <>
      <div className="my-8 w-[80%] mx-auto relative font-[Playfair_Display]">
        <img
          src="/greenEnergy/banner.jpg"
          alt="image"
          className="w-full h-96 object-cover  rounded-3xl"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#000000] to-[#66666600]  rounded-3xl"></div>

        <div className="absolute top-1/2 left-0 -translate-y-1/2 ps-10 flex flex-col gap-y-3">
          <div className="bg-[#F7BD48] text-[#000000] rounded-sm w-35 text-center py-1">
            Green Enerfy
          </div>
          <div className="text-[#FFFFFF] font-bold text-5xl">
            Green Energy & The <br /> Solar Infrastructure Boom
          </div>
          <div className="text-[#FFFFFF]  text-md">
            Explore how solar infrastructure, electric vehicles, and
            climate-tech investments are driving <br/> industrial silver demand across
            global markets.
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
