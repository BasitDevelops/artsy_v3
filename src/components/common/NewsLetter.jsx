import React from "react";

const NewsLetter = () => {
  return (
    <div className="lg:px-8">
      <div className="flex flex-col gap-4 border-[#333333] px-4 lg:items-center lg:gap-8 lg:border lg:p-8">
        <h2 className="font-Baskervville text-xl uppercase text-[#333333] lg:text-3xl">
          NewsLetter
        </h2>
        <p className="font-Satoshi text-xs text-[#333333] lg:text-2xl">
          Subscribe to get daily updates on new drops & exciting deals
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          <input
            type="text"
            placeholder="Enter your Email"
            className="h-10 border border-[#333333] px-4 font-Baskervville uppercase text-[#333333] sm:w-[446px] lg:h-[50px]"
          />
          <button className="h-[50px] w-[180px] border border-[#333333] bg-[#272727] font-Baskervville uppercase text-white lg:h-[65px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
