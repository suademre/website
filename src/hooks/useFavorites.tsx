import { useFavoritesContext } from "../context/FavoritesContext";
import { IProducts } from "../types";

const useFavorites = () => {
  const { favorite, setFavorite } = useFavoritesContext();
  const handleFavorites = (product: IProducts) => {
    const isBasket = favorite.includes(product);
    let newBaskets;
    if (isBasket) {
      newBaskets = favorite.filter((item: IProducts) => item.id !== product.id);
    } else {
      newBaskets = favorite.concat(product);
    }
    setFavorite(newBaskets);
  };
  return { favorite, handleFavorites };
};

export default useFavorites;
