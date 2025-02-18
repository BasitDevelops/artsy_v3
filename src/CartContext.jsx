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
  };

  const removeFromCart = (item) =>
    setCartItems(
      cartItems.filter((cartItem) => item.id !== cartItem.productDetails[0].id),
    );

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
