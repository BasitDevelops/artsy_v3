import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemAlreadyExistsInCart = cartItems.filter(
      (cartItem) => cartItem.productDetails[0].id === item.productDetails[0].id,
    );

    if (itemAlreadyExistsInCart.length === 0) {
      setCartItems((prevState) => [...prevState, item]);
      return;
    }

    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.productDetails[0].id === item.productDetails[0].id) {
        return { ...item, count: cartItem.count + item.count };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);

    // cartItems.map((cartItem) => {
    //   if (cartItem.productDetails[0].id === item.productDetails[0].id) {
    //     const updatedCartItems = cartItems.filter(
    //       (cartItem) =>
    //         cartItem.productDetails[0].id !== item.productDetails[0].id,
    //     );

    //     setCartItems([
    //       ...updatedCartItems,
    //       { ...item, count: cartItem.count + item.count },
    //     ]);
    //   }
    // });
  };

  const removeFromCart = (item) =>
    setCartItems(
      cartItems.filter((cartItem) => item.id !== cartItem.productDetails[0].id),
    );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
