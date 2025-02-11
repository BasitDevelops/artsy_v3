import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../CartContext";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import CartDetails from "./CartDetails";

const ShoppingCart = ({ tab, setTab }) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full"
    >
      <div className="h-[80%] w-full overflow-y-scroll pr-4">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.productDetails[0].name}
            cartItem={cartItem}
            image={cartItem.productDetails[0].url}
            title={cartItem.productDetails[0].name}
            creator={cartItem.productDetails[0].creator}
            size={cartItem.productDetails[0].size.ft}
            price={cartItem.productDetails[0].price.usd}
            itemCount={cartItem.count}
          />
        ))}
        {cartItems.length < 1 && (
          <p className="mx-auto my-4 text-center lg:text-xl">
            Your cart is empty...
          </p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="flex h-fit flex-col-reverse gap-8 border-t-[0.5px] border-[#747474] py-4 lg:flex-row lg:py-8">
          {tab === "shopping-cart" && (
            <div className="flex h-full flex-col items-center gap-4 lg:w-1/2">
              <button
                onClick={() => setTab("shipping-details")}
                className="h-[50px] w-full rounded-md bg-[#272727] font-Satoshi font-medium text-white lg:h-[65px] lg:text-xl"
              >
                Proceed to checkout
              </button>
              <button
                onClick={() => navigate("/marketplace")}
                className="font-Satoshi font-medium underline underline-offset-4 lg:text-xl"
              >
                Continue shopping
              </button>
            </div>
          )}
          <div
            className={`${tab === "shopping-cart" ? "lg:w-1/2" : "lg:w-full"} flex w-full flex-col justify-between gap-4`}
          >
            <CartDetails />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ShoppingCart;
