import React, { useContext } from "react";
import CartContext from "../CartContext";

const CartDetails = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice =
    cartItems.length > 0 &&
    cartItems
      .map((item) => item.productDetails[0].price.usd * item.count)
      .reduce((acc, currentValue) => acc + currentValue);

  return (
    <div className="flex w-full flex-col justify-between gap-4">
      <div className="flex justify-between font-Satoshi lg:text-xl">
        <p className="text-[#888888]">Products in cart : </p>
        <p className="text-[#292929]">
          {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
        </p>
      </div>
      <div className="flex justify-between font-Satoshi lg:text-xl">
        <p className="text-[#888888]">Shipping : </p>
        <p className="text-[#292929]">${(2.5 * cartItems.length).toFixed(2)}</p>
      </div>
      <div className="flex justify-between font-Satoshi lg:text-xl">
        <p className="text-[#888888]">Total : </p>
        <p className="text-[#292929]">
          ${cartItems.length > 0 ? totalPrice.toFixed(2) : 0}
        </p>
      </div>
    </div>
  );
};

export default CartDetails;
