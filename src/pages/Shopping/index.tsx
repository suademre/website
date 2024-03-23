import { CardContainer } from "./styles";
import { useShoppingContext } from "../../context/ShoppingContext";
import useShopping from "../../hooks/useShopping";
import Card from "../../components/molekuls/Card";
import { useFavoritesContext } from "../../context/FavoritesContext";
import useFavorites from "../../hooks/useFavorites";
import Container from "../../components/Grid/Container";
import Column from "../../components/Grid/Column";
import ListCard from "../../components/molekuls/ListCard";
import { useState } from "react";

const Shopping = () => {
  const { shopping } = useShoppingContext();
  const { handleShoppings } = useShopping();
  const { favorite } = useFavoritesContext();
  const { handleFavorites } = useFavorites();

  const [quantity, setQuantity] = useState(1);

  //TODO: bug: When I change quantity, the quantity of all products changes
  const totalPrice = shopping.reduce(
    (total, item) => total + item.price * quantity,
    0
  );

  // const increaseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };
  // const decreaseQuantity = () => {
  //   setQuantity(quantity - 1);
  // };

  const quantityRechner = (value: string) => {
    if (value === "increase") {
      setQuantity(quantity + 1);
    }
    if (value === "decrease") {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <CardContainer>
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
      </CardContainer>
      <Container>
        <Column cols={{ xl: 8 }}>
          {shopping.map((product, index) => (
            <ListCard
              key={index}
              imageFrond={product.imageFrond}
              title={product.title}
              price={product.price}
              quantity={quantity}
              // setQuantity={setQuantity}
              quantityRechner={quantityRechner}
            />
          ))}
        </Column>
        <p>{totalPrice}</p>
      </Container>
    </>
  );
};

export default Shopping;
