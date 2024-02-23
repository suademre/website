import React, { createContext, useContext, useState } from "react";
import { IProducts } from "../types";

type ShoppingContextType = {
  shopping: IProducts[];
  setShopping: React.Dispatch<React.SetStateAction<IProducts[]>>;
};

type ShoppingContextProviderType = {
  children: React.ReactNode;
};

const defaultShoppingContext: ShoppingContextType = {
  shopping: [],
  setShopping: () => {},
};

const ShoppingContext = createContext<ShoppingContextType>(
  defaultShoppingContext
);

const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

const ShoppingContextProvider = ({ children }: ShoppingContextProviderType) => {
  const [shopping, setShopping] = useState<IProducts[]>([]);
  return (
    <ShoppingContext.Provider value={{ shopping, setShopping }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { useShoppingContext, ShoppingContextProvider };
