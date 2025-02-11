import React, { useEffect, useState } from "react";
import UpcomingDropCard from "../../components/UpcomingDropCard";
import NewsLetter from "../../components/common/NewsLetter";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";

const UpcomingDrops = () => {
  const [upcomingDrops, setUpcomingDrops] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/f07eef2eee3c17daff3d7a0a867c8fa2537c8f38/drops.json",
    )
      .then((response) => response.json())
      .then((data) => setUpcomingDrops(data));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-16 px-4 lg:px-16"
    >
      <div className="flex flex-col items-center gap-4 lg:gap-8">
        <h1 className="font-Satoshi text-xl font-medium lg:text-3xl">
          Upcoming drops
        </h1>
        <p className="font-Satoshi font-normal lg:text-2xl">
          Turn on notifications so that no drops will miss you.
        </p>
        <button className="my-auto h-[50px] w-[200px] rounded-lg border border-black font-Satoshi font-medium duration-300 hover:bg-black hover:text-white lg:h-[60px] lg:w-[250px] lg:text-2xl">
          Notify me
        </button>
      </div>

      <div className="flex flex-col gap-16">
        {upcomingDrops.map((upcomingDrop) => (
          <UpcomingDropCard
            key={upcomingDrop.id}
            image={upcomingDrop.url}
            title={upcomingDrop.title}
            desc={upcomingDrop.desc}
            creator={upcomingDrop.creator}
            date={`${upcomingDrop.date.month} ${upcomingDrop.date.day} at ${upcomingDrop.date.time} ${upcomingDrop.date.timezone}`}
          />
        ))}
      </div>
      <NewsLetter />
      <Footer />
    </motion.div>
  );
};

export default UpcomingDrops;
