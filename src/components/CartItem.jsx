import React, { useContext, useState } from "react";
import { CircleXmarkIcon } from "../assets/icons";
import CartContext from "../CartContext";

const CartItem = ({
  cartItem,
  image,
  title,
  creator,
  size,
  price,
  itemCount,
}) => {
  const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);

  const [count, setCount] = useState(itemCount);

  const decreaseCount = () => {
    if (count === 1) {
      return;
    }

    setCount((prevState) => prevState - 1);
  };

  const increaseCount = () => {
    setCount((prevState) => prevState + 1);
    // const updatedCartItems = cartItems.map((item) => {
    //   if (item.productDetails[0].id === cartItem.productDetails[0].id) {
    //     return { ...item, count: cartItem.count + item.count };
    //   }
    //   return cartItem;
    // });
    // setCartItems(updatedCartItems);
    // console.log(cartItems);
  };

  return (
    <div className="flex gap-4 border-t-[0.5px] border-[#747474] py-4 lg:py-8">
      <img
        src={image}
        className="h-[125px] w-[125px] rounded lg:h-[200px] lg:w-[200px]"
      />
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-between py-2 lg:py-4">
          <p className="font-Satoshi text-lg font-bold capitalize text-[#292929] lg:text-2xl">
            {title}
          </p>
          <p className="font-Satoshi capitalize lg:text-2xl">{creator}</p>
          <p className="font-Satoshi text-sm text-[#888888] lg:text-lg">
            Size: <span className="text-[#292929]">{size} ft</span>
          </p>
          <div className="flex items-center gap-4 text-lg text-[#333333] lg:text-2xl">
            <button onClick={decreaseCount}>-</button>
            <span className="font-Satoshi text-lg font-medium lg:text-2xl">
              {count}
            </span>
            <button onClick={increaseCount}>+</button>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <button onClick={() => removeFromCart(cartItem.productDetails[0])}>
            <CircleXmarkIcon />
          </button>
          <span className="font-Sora text-lg lg:text-2xl">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
