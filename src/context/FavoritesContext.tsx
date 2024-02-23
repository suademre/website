import React, { createContext, useContext, useState } from "react";
import { IProducts } from "../types";

type FavoritesContextType = {
  favorite: IProducts[];
  setFavorite: React.Dispatch<React.SetStateAction<IProducts[]>>;
};

type FavoritesContextProviderType = {
  children: React.ReactNode;
};

const defaultFavoritesContext: FavoritesContextType = {
  favorite: [],
  setFavorite: () => {},
};

const FavoritesContext = createContext<FavoritesContextType>(
  defaultFavoritesContext
);

const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderType) => {
  const [favorite, setFavorite] = useState<IProducts[]>([]);
  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { useFavoritesContext, FavoritesContextProvider };
