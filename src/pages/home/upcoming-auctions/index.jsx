import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  AngleLeftSvg,
  AngleRightSvg,
  LongRightArrowSvg,
  WhiteCircleSvg,
} from "../../../assets/icons";
import { motion } from "framer-motion";

const UpcomingAuctions = () => {
  const navigate = useNavigate();

  const [upcomingAuctions, setUpcomingAuctions] = useState([]);
  const [index, setIndex] = useState(0);
  const [carouselProgressBar, setCarouselProgressBar] = useState(50);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/2f38e4563e10a2a39bb52a38d0b19491b09ca536/carousel.json",
    )
      .then((response) => response.json())
      .then((data) => setUpcomingAuctions(data.carousel));
  }, []);

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(upcomingAuctions.length - 1);
      setCarouselProgressBar(50 * upcomingAuctions.length);
    } else {
      setIndex((prevState) => prevState - 1);
      setCarouselProgressBar((prevState) => prevState - 50);
    }
  };

  const handleNext = () => {
    if (index === upcomingAuctions.length - 1) {
      setIndex(0);
      setCarouselProgressBar(50);
    } else {
      setIndex((prevState) => prevState + 1);
      setCarouselProgressBar((prevState) => prevState + 50);
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[#C056097D] p-4 lg:px-16 lg:py-8">
      <div>
        <h2 className="mb-4 font-Satoshi text-2xl font-medium text-white lg:text-4xl">
          See Upcoming Auctions and Exhibitions
        </h2>
        <LongRightArrowSvg />
      </div>

      {upcomingAuctions.length > 0 && (
        <motion.div
          // initial={{ y: 20 }}
          // animate={{ y: 0 }}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          style={{
            backgroundImage: `url(${upcomingAuctions[index].url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[325px] md:h-[525px]"
        >
          <div className="flex h-full flex-col justify-between bg-gradient-to-r from-[#00000000] via-[#00000033] to-[#00000085] p-4 md:flex-row md:items-end md:p-8">
            <div className="flex gap-4">
              <div className="flex min-w-[50px] flex-col items-end gap-4 lg:min-w-[72.5px]">
                <WhiteCircleSvg />
                <span className="font-Bellefair text-5xl text-[#E1E1E1] md:text-7xl">
                  0{upcomingAuctions[index].id.slice(1)}
                </span>
              </div>

              <div className="flex flex-col gap-4 text-white">
                <h3 className="font-Bellefair text-xl uppercase md:w-[350px] md:text-3xl">
                  {upcomingAuctions[index].title}
                </h3>
                <p className="font-Poppins text-xs md:text-sm">
                  {upcomingAuctions[index].date}
                </p>
                <p className="font-Satoshi text-xs font-medium uppercase md:max-w-[600px] md:text-base">
                  {upcomingAuctions[index].desc}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 text-white">
              <button
                onClick={() => navigate("/auctions")}
                className="border-b border-white font-Satoshi md:text-lg"
              >
                See more
              </button>
              <button
                onClick={() => navigate("/drops")}
                className="rounded-lg border border-white px-4 py-2 font-Satoshi duration-300 hover:bg-white hover:text-black md:text-lg"
              >
                Set a reminder
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex items-center justify-between">
        <div className="hidden h-1 w-[175px] rounded-[50px] bg-[#AEAEAE] lg:flex">
          {carouselProgressBar > 45 && (
            <div className="h-full w-[50px] rounded-s-[50px] bg-white"></div>
          )}
          {carouselProgressBar > 95 && (
            <div className="h-full w-[50px] bg-white"></div>
          )}
          {carouselProgressBar > 145 && (
            <div className="h-full w-[50px] bg-white"></div>
          )}
        </div>
        <div className="flex w-full justify-end gap-2 lg:gap-4">
          <button
            onClick={handlePrevious}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFFFFF33] shadow shadow-[#00000026] hover:shadow-lg lg:h-14 lg:w-14"
          >
            <AngleLeftSvg />
          </button>
          <button
            onClick={handleNext}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFFFFF33] shadow shadow-[#00000026] hover:shadow-lg lg:h-14 lg:w-14"
          >
            <AngleRightSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAuctions;
