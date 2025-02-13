import React from "react";
import image from "../assets/images/Rectangle 247.png";

const UpcomingDropCard = ({ image, title, desc, creator, date }) => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex h-[250px] items-end justify-center rounded-lg p-4 lg:h-[450px] lg:w-1/2 lg:rounded-xl lg:p-4"
      >
        <div className="flex h-fit w-full items-center justify-between rounded-lg border-[0.5px] border-[#FFFFFF] bg-[#F5F4F43D] p-4">
          <div>
            <p className="font-STIX text-white lg:text-xl">Time remaining</p>
            <p className="font-STIX text-lg text-white lg:text-2xl">
              6hr : 40mins: 15s
            </p>
          </div>
          <button className="h-6 w-[50px] rounded-xl bg-[#4693ED] font-Satoshi font-medium text-white lg:h-9 lg:w-[100px] lg:text-xl">
            Join
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 lg:w-1/2 lg:py-8">
        <span className="flex h-7 w-[100px] items-center justify-center rounded-md bg-[#4693ED] font-Inter text-xs font-medium text-[#ffffff] lg:h-10 lg:w-[150px] lg:rounded-lg lg:text-lg">
          UPCOMING
        </span>
        <p className="font-Satoshi capitalize lg:text-lg">{date}</p>
        <h2 className="font-Satoshi text-xl font-medium capitalize lg:text-3xl">
          {title}
        </h2>
        <p className="font-Satoshi text-[#616161] lg:text-lg">{desc}</p>
        <p className="font-Satoshi text-lg font-medium capitalize lg:text-2xl">
          Creator : <span className="text-[#006CA2]">{creator}</span>
        </p>
        <button className="w-fit font-Satoshi text-[#006CA2] underline lg:text-lg">
          Get notified
        </button>
      </div>
    </div>
  );
};

export default UpcomingDropCard;
