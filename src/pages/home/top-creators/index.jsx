import React from "react";
import { LoaderSvg } from "../../../assets/icons";

const TopCreators = () => {
  return (
    <div className="flex w-full flex-col gap-4 bg-[#E2E2E2] p-4 lg:p-16">
      <div className="flex items-start justify-between gap-4">
        <h2 className="w-[270px] font-ClashDisplay text-2xl font-semibold text-[#161616] lg:w-[550px] lg:text-5xl">
          TOP CREATORS OF THE WEEK
        </h2>
        <div className="flex gap-4">
          <div className="hidden lg:flex">
            <LoaderSvg />
          </div>
          <div className="flex flex-wrap justify-center gap-2 lg:flex-col lg:gap-8">
            <p className="font-ClashDisplay text-xs text-[#333333] lg:text-3xl">
              Editorials
            </p>
            <p className="font-ClashDisplay text-xs text-[#333333] lg:text-3xl">
              Fashion
            </p>
            <p className="font-ClashDisplay text-xs text-[#333333] lg:text-3xl">
              Lifestyle
            </p>
            <p className="font-ClashDisplay text-xs text-[#333333] lg:text-3xl">
              Blueprint
            </p>
          </div>
        </div>
      </div>
      <div className="text-center font-ClashDisplay text-xs font-extralight text-[#00000091] lg:max-w-[1148px] lg:text-start lg:text-3xl">
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there’s always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </div>
      <div className="flex justify-end">
        <p className="font-ClashDisplay text-6xl font-bold text-[#161616] line-through lg:text-9xl">
          1985
        </p>
      </div>
    </div>
  );
};

export default TopCreators;
