import React, { useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
const cartContext = React.createContext();

export const useCart = () => {
  return useContext(cartContext);
};

// const retrieveStoredCart = () => {
//   const storedCart = window.localStorage.getItem("cartFlipkart");
//   return storedCart;
// };

export const CartProvider = ({ children }) => {
  let initialCart = {
    items: [],
    totalAmount: 0,
  };

  // const cartData = retrieveStoredCart();
  // if (cartData) {
  //   initialCart = cartData;
  // }

  const initialState = initialCart;
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const checkCartHandler = (id) => {
    dispatchCartAction({ type: "CHECK-CART", id: id });
  };

  const removeFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearFromCartHandler = (id) => {
    dispatchCartAction({ type: "CLEAR-CART-ITEM", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR-CART" });
    // window.localStorage.removeItem("cartFlipkart");
  };

  const value = {
    cartItems: cartState.items,
    cartTotalAmount: cartState.totalAmount,
    addToCart: addToCartHandler,
    itemIsInCart: checkCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCartItem: clearFromCartHandler,
    clearCart: clearCartHandler,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
