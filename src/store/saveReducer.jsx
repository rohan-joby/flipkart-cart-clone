export const saveReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { item } = action;
      const updatedItems = state.items.concat(item);
      return { items: updatedItems };
    }

    case "REMOVE": {
      const id = action.id;
      const updatedItems = state.items.filter((item) => item.id !== id);
      return { items: updatedItems };
    }

    default: {
      return { items: [] };
    }
  }
};
