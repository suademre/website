import useFetchData from "../../hooks/api/useFetchData";
import { useParams } from "react-router-dom";
import { Container, Wrapper, FilteredPrice, Label } from "./styles";
import Card from "../../components/molekuls/Card";
import { useShoppingContext } from "../../context/ShoppingContext";
import useShopping from "../../hooks/useShopping";
import { useFavoritesContext } from "../../context/FavoritesContext";
import useFavorites from "../../hooks/useFavorites";
import useFilteredByPrice from "../../hooks/useFilteredByPrice";

const Categories = () => {
  const { data: products } = useFetchData("products");
  // const { data: categories } = useFetchData("categories");
  const { shopping } = useShoppingContext();
  const { favorite } = useFavoritesContext();
  // const { shopping, setShopping } = useShoppingContext();
  const { handleShoppings } = useShopping();
  const { handleFavorites } = useFavorites();
  // const [shopping, setShopping] = useState<IProducts[]>([]);
  const { slug } = useParams();

  const {
    priceRanges,
    selectedPriceRanges,
    handlePriceRangeChange,
    filteredProductsByPrice,
  } = useFilteredByPrice();

  const categoryProducts = products.filter(
    (item) => item.category.title === slug
  );
  console.log("cateogryProducts: ", categoryProducts);

  return (
    <Container>
      <FilteredPrice>
        <h3>Filtered Products By Price</h3>
        <div>
          {priceRanges.map((aralik) => (
            <Label key={aralik.id}>
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(aralik.id)}
                onChange={() => handlePriceRangeChange(aralik.id)}
              />
              <div>{aralik.label + "€"}</div>
            </Label>
          ))}
        </div>
      </FilteredPrice>
      <Wrapper>
        {filteredProductsByPrice(categoryProducts, selectedPriceRanges).map(
          (product, index) => (
            <Card
              key={index}
              imageFrond={product.imageFrond}
              title={product.title}
              price={product.price}
              // onAdd={() => toggleShoppingItem(product.id)}
              onAddShopping={() => handleShoppings(product)}
              onAddFavorites={() => handleFavorites(product)}
              isInShoppingList={shopping.some((item) => item.id === product.id)}
              isInFavoritesList={favorite.some(
                (item) => item.id === product.id
              )}
            />
          )
        )}
      </Wrapper>
      {/* </Column> */}
    </Container>
  );
};

export default Categories;

// varient 1
// const toggleShoppingItem = (id: string) => {
//   setShopping((currentShoppimg): IProducts[] => {
//     const isProductInList = currentShoppimg.some((item) => item.id === id);
//     if (isProductInList) {
//       return currentShoppimg.filter((item) => item.id !== id);
//     } else {
//       const productToAdd = products.find((product) => product.id === id);
//       return [...currentShoppimg, productToAdd];
//     }
//   });
// };

// Varient 2
// const toggleShoppingItem = (id: string) => {
//   setShopping((currentShopping) =>
//     currentShopping.some((item) => item.id === id)
//       ? currentShopping.filter((item) => item.id !== id)
//       : [...currentShopping, products.find((item) => item.id === id)]
//   );
// };

// variant3
// const handleShoppings = (product: IProducts) => {
//   const isBasket = shopping.includes(product);
//   let newBaskets;
//   if (isBasket) {
//     newBaskets = shopping.filter((item: IProducts) => item.id !== product.id);
//   } else {
//     newBaskets = shopping.concat(product);
//   }
//   setShopping(newBaskets);
// };

// varient 4
// const handleShoppings = (product: IProducts) => {
//   setShopping((currentShopping) => {
//     const isBasket = currentShopping.some(item => item.id === product.id);
//     if (isBasket) {
//       // Ürün zaten sepete eklenmişse, çıkar
//       return currentShopping.filter((item) => item.id !== product.id);
//     } else {
//       // Ürün sepete eklenmemişse, ekle
//       return [...currentShopping, product];
//     }
//   });
// };
