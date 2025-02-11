import React from "react";
import FeaturedProducts from "./featured-products";
import UpcomingAuctions from "./upcoming-auctions";
import { RightArrowIcon } from "../../assets/icons";
import TopCreators from "./top-creators";
import NewsLetter from "../../components/common/NewsLetter";
import Footer from "../../components/common/Footer";
import { useNavigate } from "react-router";
import Animation from "../../components/Animation";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 overflow-x-hidden md:gap-16"
    >
      <section>
        <div className="flex flex-col items-center gap-8 px-4">
          <h1 className="text-center font-ClashDisplay text-3xl font-medium text-[#333333] sm:text-5xl md:text-[64px] md:text-[#292929] xl:w-[1153px]">
            Photography is poetry & beautiful untold stories
          </h1>
          <p className="text-center font-Satoshi text-base font-medium text-[#292929] sm:text-xl md:text-[28px] xl:w-[926px]">
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </p>
        </div>
        <Animation />
      </section>
      <FeaturedProducts />
      <UpcomingAuctions />
      <section className="py-8 lg:py-16">
        <div className="flex items-center justify-between border-t-[0.5px] border-[#292929] p-4 lg:border-[#333333] lg:px-16 lg:py-8">
          <p className="font-Satoshi text-lg font-medium text-[#292929] lg:text-3xl lg:text-[#333333]">
            Explore marketplace
          </p>
          <button onClick={() => navigate("/marketplace")}>
            <RightArrowIcon />
          </button>
        </div>
        <div className="flex items-center justify-between border-y-[0.5px] border-[#292929] p-4 lg:border-[#333333] lg:px-16 lg:py-8">
          <p className="font-Satoshi text-lg font-medium text-[#292929] lg:text-3xl lg:text-[#333333]">
            See auctions
          </p>
          <button onClick={() => navigate("/auctions")}>
            <RightArrowIcon />
          </button>
        </div>
      </section>
      <TopCreators />
      <NewsLetter />
      <Footer />
    </motion.div>
  );
};

export default Home;
