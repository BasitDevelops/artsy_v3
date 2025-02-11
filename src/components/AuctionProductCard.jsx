import React from "react";
const AuctionProductCard = ({ image, time }) => {
  return (
    <div
      style={{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex h-[150px] min-w-[200px] items-end justify-center rounded-xl p-2 shadow-sm shadow-[#00000040] lg:h-[250px] lg:min-w-[300px] lg:p-4"
    >
      <div className="flex h-fit w-full items-center justify-center rounded-lg border-[0.5px] border-[#FFFFFF] bg-[#F5F4F43D] p-2">
        <span className="font-STIX text-white lg:text-2xl">{time}</span>
      </div>
    </div>
  );
};

export default AuctionProductCard;
