import React from "react";
import ShoppingCart from "./ShoppingCart";
import { motion } from "framer-motion";

const ShippingDetails = ({ setTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex gap-8"
    >
      <div className="flex w-full flex-col gap-8 xl:w-1/2">
        <div>
          <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
            Your email
          </p>
          <input
            type="text"
            className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
          />
          <div className="mt-4 flex items-center gap-2">
            <input type="checkbox" />
            <p className="font-Satoshi text-xs text-[#747474] lg:text-base">
              Get updates about new drops & exclusive offers
            </p>
          </div>
        </div>
        <div>
          <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
            Your full name
          </p>
          <input
            type="text"
            className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
          />
        </div>
        <div>
          <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
            Choose a wallet
          </p>
          <input
            type="text"
            className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
          />
        </div>
        <div>
          <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
            City
          </p>
          <input
            type="text"
            className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full">
            <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
              Country
            </p>
            <input
              type="text"
              className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
            />
          </div>
          <div className="w-full">
            <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
              Postal code
            </p>
            <input
              type="text"
              className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
            />
          </div>
        </div>
        <div>
          <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
            Phone number
          </p>
          <input
            type="text"
            className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setTab("payment-details")}
            className="h-[50px] w-full rounded-md bg-[#272727] font-Satoshi font-medium text-white lg:h-[65px] lg:text-xl"
          >
            Proceed to payment
          </button>
          <button
            onClick={() => setTab("shopping-cart")}
            className="font-Satoshi font-medium underline underline-offset-4 lg:text-xl"
          >
            Back to cart
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden w-1/2 xl:flex"
      >
        <ShoppingCart />
      </motion.div>
    </motion.div>
  );
};

export default ShippingDetails;
