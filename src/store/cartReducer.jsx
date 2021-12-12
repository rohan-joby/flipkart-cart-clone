export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { item } = action;
      const updatedTotalAmount = state.totalAmount + item.amount * item.price;
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(item);
      }
      // window.localStorage.setItem("cartFlipkart", JSON.stringify({ items: updatedItems, totalAmount: updatedTotalAmount }));
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case "CHECK-CART": {
      const id = action.id;
      const existingItemIndex = state.items && state.items.findIndex(
        (cartItem) => cartItem.id === id
      );
      const isInCart = existingItemIndex === -1 ? false : true;
      
      return isInCart;
    }
    case "REMOVE": {
      const id = action.id;
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingItem = state.items[existingItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((cartItem) => cartItem.id !== id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount : existingItem.amount - 1,
      };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      // window.localStorage.setItem(
      //   "cartFlipkart",
      //   JSON.stringify({ items: updatedItems, totalAmount: updatedTotalAmount })
      // );
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case "CLEAR-CART-ITEM": {
      const id = action.id;
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingItem = state.items[existingItemIndex];
      const updatedTotalAmount =
        state.totalAmount - existingItem.price * existingItem.amount;
      const updatedItems = state.items.filter((cartItem) => cartItem.id !== id);
      // window.localStorage.setItem(
      //     "cartFlipkart",
      //     JSON.stringify({
      //       items: updatedItems,
      //       totalAmount: updatedTotalAmount,
      //     })
      //   );
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case "CLEAR-CART": {
      //window.localStorage.removeItem("cartFlipkart");
      return { items: [], totalAmount: 0 };
    }
    default: {
      return { items: [], totalAmount: 0 };
    }
  }
};
