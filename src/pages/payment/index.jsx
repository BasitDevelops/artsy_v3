import React, { useState } from "react";

import ShoppingCart from "../../components/ShoppingCart";
import ShippingDetails from "../../components/ShippingDetails";
import PaymentDetails from "../../components/PaymentDetails";
import { motion } from "framer-motion";

const Payment = () => {
  const [tab, setTab] = useState("shopping-cart");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 px-4 pb-16 lg:px-16"
    >
      <div className="mx-auto hidden w-[750px] items-center justify-between border-b-[0.5px] border-[#747474] pb-2 text-[#888888] lg:flex">
        <p
          className={`${tab === "shopping-cart" && "font-medium text-[#292929] underline underline-offset-[15px]"} font-Satoshi text-lg`}
        >
          Shopping cart
        </p>
        <p
          className={`${tab === "shipping-details" && "font-medium text-[#292929] underline underline-offset-[15px]"} font-Satoshi text-lg`}
        >
          Shipping details
        </p>
        <p
          className={`${tab === "payment-details" && "font-medium text-[#292929] underline underline-offset-[15px]"} font-Satoshi text-lg`}
        >
          Payment details
        </p>
      </div>

      {tab === "shopping-cart" && <ShoppingCart tab={tab} setTab={setTab} />}
      {tab === "shipping-details" && <ShippingDetails setTab={setTab} />}
      {tab === "payment-details" && <PaymentDetails setTab={setTab} />}
    </motion.div>
  );
};

export default Payment;
