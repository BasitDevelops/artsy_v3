import React from "react";
import image from "../assets/images/Rectangle 230.png";
import image1 from "../assets/images/Rectangle 231.png";
import image2 from "../assets/images/Rectangle 232.png";
import image3 from "../assets/images/Rectangle 233.png";
import image4 from "../assets/images/Rectangle 234.png";
import { motion } from "framer-motion";

const Animation = () => {
  return (
    <motion.div className="flex items-center gap-8 py-8 lg:py-16">
      <motion.img
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        src={image}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        src={image1}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        src={image2}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }}
        src={image3}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
        src={image4}
      />
    </motion.div>
  );
};

export default Animation;
