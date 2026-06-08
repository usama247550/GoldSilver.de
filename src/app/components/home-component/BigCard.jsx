const BigCard = () => {
  return (
    <div className="relative w-full h-64 md:h-75 rounded-xl overflow-hidden group ">
      <img
        src="/grid-images/gridimage1.jpg"
        alt="news"
        className="w-full h-full object-cover "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white space-y-1">
        <p className="text-xs bg-[#F7BD48] px-2 py-1 w-fit rounded">
          Macro Tracing
        </p>

        <h2 className="text-base md:text-2xl font-semibold font-[Playfair_Display]">
          Gold Surges as Central Banks Increase Strategic Reserves
        </h2>

        <p className="text-xs text-[#FAF8F0] max-w-[90%] line-clamp-2 md:line-clamp-3">
          As central banks accelerate their shift back to physical reserves, we
          explore why gold remains the ultimate hedge against systemic
          volatility.
        </p>

        <button className="mt-1 text-xs border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white  px-3 py-1 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BigCard;
