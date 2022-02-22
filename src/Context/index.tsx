import React, { FC } from "react";
import { createStore, TStore } from "../store";
import { useLocalObservable } from "mobx-react";

const storeContext = React.createContext<TStore | null>(null);

export const StoreProvider: FC = ({ children }) => {
  const store = useLocalObservable(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
