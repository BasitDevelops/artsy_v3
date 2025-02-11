import React, { useEffect, useState } from "react";
import AuctionProductCard from "../../components/AuctionProductCard";
import TopBidCard from "../../components/TopBidCard";
import { motion } from "framer-motion";
import NewsLetter from "../../components/common/NewsLetter";
import Footer from "../../components/common/Footer";

const Auction = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/e92b503abc14758a31c386e660e50f43d1b11c5e/auction.json",
    )
      .then((response) => response.json())
      .then((data) => setAuctions(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 px-4 lg:px-16"
    >
      <p className="font-Satoshi md:text-2xl md:font-medium">
        Here’s an overview of products actively on auction, explore!
      </p>
      <div className="flex gap-4 overflow-x-scroll pb-4">
        {auctions?.products?.map((product) => (
          <AuctionProductCard
            key={product.id}
            image={product.url}
            time={product.time}
          />
        ))}
      </div>
      <p className="font-Satoshi md:text-2xl md:font-medium">
        Top bids from popular creators
      </p>
      <div className="flex flex-col gap-6 pb-4 md:flex-row md:overflow-x-scroll">
        {auctions?.bids?.map((bid) => (
          <TopBidCard
            key={bid.id}
            image={bid.url}
            name={bid.name}
            creator={bid.creator}
            date={`${bid.date.day}/${bid.date.month}/${bid.date.year}`}
            highestBid={bid.bid.highest.eth}
            currentBid={bid.bid.current.eth}
          />
        ))}
      </div>
      <NewsLetter />
      <Footer />
    </motion.div>
  );
};

export default Auction;
