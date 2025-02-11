import React from "react";

const TopBidCard = ({ image, name, creator, date, currentBid, highestBid }) => {
  return (
    <div className="flex flex-col gap-4 md:w-[350px]">
      <div className="h-fit w-full rounded-xl shadow shadow-[#00000040]">
        <img src={image} className="h-[185px] w-full lg:h-[285px]" />
        <p className="px-4 py-2 font-Satoshi font-bold capitalize text-[#333333] lg:text-lg">
          {name}
        </p>
      </div>
      <p className="font-Satoshi font-medium text-[#616161] lg:font-normal lg:text-black">
        Creator :{" "}
        <span className="font-bold capitalize text-[#006CA2]">{creator}</span>
      </p>
      <p className="font-Satoshi font-medium text-[#616161] lg:font-normal lg:text-black">
        Date : <span className="font-bold">{date}</span>
      </p>
      <p className="font-Satoshi font-medium text-[#616161] lg:font-normal lg:text-black">
        Highest bid : <span className="font-bold">{highestBid}</span>
      </p>
      <div className="flex w-full items-center justify-between rounded-lg bg-[#F6F4F4] p-4">
        <div className="flex flex-col">
          <p className="font-Satoshi font-bold text-[#616161] lg:font-normal lg:text-[#616161]">
            Current bid
          </p>
          <span className="font-Satoshi font-bold text-[#333333] lg:font-normal lg:text-black">
            {currentBid}
          </span>
        </div>
        <button className="h-[40px] w-[135px] rounded-sm bg-[#272727] font-Satoshi font-medium text-white lg:h-[50px] lg:w-[175px] lg:rounded-sm lg:text-xl">
          Place bid
        </button>
      </div>
    </div>
  );
};

export default TopBidCard;
