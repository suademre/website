import { Container } from "./styles";
import { useShoppingContext } from "../../context/ShoppingContext";
import useShopping from "../../hooks/useShopping";
import Card from "../../components/molekuls/Card";
import { useFavoritesContext } from "../../context/FavoritesContext";
import useFavorites from "../../hooks/useFavorites";

const Shopping = () => {
  const { shopping } = useShoppingContext();
  const { handleShoppings } = useShopping();
  const { favorite } = useFavoritesContext();
  const { handleFavorites } = useFavorites();
  return (
    <Container>
      {shopping.length === 0 && <p>Es gibt keine Produkte </p>}
      {shopping.map((product, index) => (
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

export default Shopping;
