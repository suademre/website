import { Container, Wrapper } from "./styles";
import { useShoppingContext } from "../../context/ShoppingContext";
import useShopping from "../../hooks/useShopping";
import Card from "../../components/molekuls/Card";
import { useFavoritesContext } from "../../context/FavoritesContext";
import useFavorites from "../../hooks/useFavorites";
import Image from "../../components/Image";
import Flex from "../../components/Flex";
import Icon from "../../components/Icon";

const Shopping = () => {
  const { shopping } = useShoppingContext();
  const { handleShoppings } = useShopping();
  const { favorite } = useFavoritesContext();
  const { handleFavorites } = useFavorites();

  const totalPrice = shopping.reduce((total, item) => total + item.price, 0);
  return (
    <>
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
      <div>
        {shopping.map((product, index) => (
          <Wrapper key={index}>
            <Image src={product.imageFrond} alt={product.title} width="100px" />
            <Flex flexDirection="column" alignItems="center" marginLeft="10px">
              <h3>Title</h3>
              <div>{product.title}</div>
            </Flex>
            <div>
              <Icon name="increase" />
              <Icon name="decrease" />
            </div>
          </Wrapper>
        ))}
      </div>
    </>
  );
};

export default Shopping;
