import React, { useContext, useReducer } from "react";
import { saveReducer } from "./saveReducer";

const saveContext = React.createContext();

export const useSave = () => {
  return useContext(saveContext);
};


export const SaveProvider = ({ children }) => {
  let initialState = {
    items: [],
  };

  const [saveState, dispatchSaveAction] = useReducer(saveReducer, initialState);

  const addToSaveHandler = (item) => {
    dispatchSaveAction({ type: "ADD", item: item });
  };

  const removeFromSaveHandler = (id) => {
    dispatchSaveAction({ type: "REMOVE", id: id });
  };

  const value = {
    savedItems: saveState.items,
    addToSave: addToSaveHandler,
    removeFromSave: removeFromSaveHandler,

  };
  return <saveContext.Provider value={value}>{children}</saveContext.Provider>;
};
