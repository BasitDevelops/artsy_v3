import React from "react";
import image from "../assets/images/Rectangle 65.png";

const SuggestedProductCard = () => {
  return (
    <div className="flex h-[300px] min-w-[250px] flex-col gap-2 border border-[#333333] p-4">
      <img src={image} className="h-[250px] w-[250px]" />
      <div className="flex items-center justify-between">
        <span className="font-Satoshi text-base font-medium text-[#333333]">
          Sassy
        </span>
        <span className="font-Satoshi text-base font-medium text-[#333333]">
          $125
        </span>
      </div>
    </div>
  );
};

export default SuggestedProductCard;
