import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ id, img, title, price }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onClick={() => navigate(`/marketplace/product/${id}`)}
      className="h-fit w-full cursor-pointer rounded-xl bg-[#FFFFFF] shadow-[#D9E1F45C] md:w-fit md:p-4 md:shadow-2xl"
    >
      <img
        src={img}
        className="h-[385px] w-full md:h-[250px] md:w-[215px] md:rounded-lg"
      />
      <div className="mt-1 flex flex-row items-center justify-between gap-4 md:flex-col md:items-start md:justify-start">
        <p className="font-Satoshi text-xl uppercase text-[#333333]">{title}</p>
        <span className="font-Satoshi text-2xl font-bold text-[#333333]">
          ${price.toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
