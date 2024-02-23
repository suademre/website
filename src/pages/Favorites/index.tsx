import React from "react";
import { useShoppingContext } from "../../context/ShoppingContext";
import useShopping from "../../hooks/useShopping";
import { useFavoritesContext } from "../../context/FavoritesContext";
import useFavorites from "../../hooks/useFavorites";
import { Container } from "./styles";
import Card from "../../components/molekuls/Card";

const Favorites = () => {
  const { shopping } = useShoppingContext();
  const { handleShoppings } = useShopping();
  const { favorite } = useFavoritesContext();
  const { handleFavorites } = useFavorites();
  return (
    <Container>
      {favorite.length === 0 && <p>Es gibt keine Produkte in Favorite List </p>}
      {favorite.map((product, index) => (
        <Card
          key={index}
          imageFrond={product.imageFrond}
          title={product.title}
          price={product.price}
          // onAdd={() => toggleShoppingItem(product.id)}
          onAddShopping={() => handleShoppings(product)}
          onAddFavorites={() => handleFavorites(product)}
          isInShoppingList={shopping.some((item) => item.id === product.id)}
          isInFavoritesList={favorite.some((item) => item.id === product.id)}
        />
      ))}
    </Container>
  );
};

export default Favorites;
