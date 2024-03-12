import useFetchData from "../../hooks/api/useFetchData";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import Card from "../../components/molekuls/Card";
// import { IProducts } from "../../types";
import { useShoppingContext } from "../../context/ShoppingContext";
import useShopping from "../../hooks/useShopping";
import { useFavoritesContext } from "../../context/FavoritesContext";
import useFavorites from "../../hooks/useFavorites";
import { useState } from "react";
import { IProducts } from "../../types";

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

  const categoryProducts = products.filter(
    (item) => item.category.title === slug
  );
  console.log("cateogryProducts: ", categoryProducts);

  //price ranges
  interface IPriceRanges {
    id: number | string;
    min: number;
    max: number;
  }
  const priceRanges = [
    { id: 1, label: "0 - 100", min: 0, max: 100 },
    { id: 2, label: "101 - 200", min: 101, max: 200 },
    { id: 3, label: "201 - 300", min: 201, max: 300 },
    { id: 4, label: "301 - 400", min: 301, max: 400 },
    { id: 5, label: "401 - 500", min: 301, max: 500 },
    // Diğer aralıklar...
  ];

  // Başlangıçta hiçbir aralık seçilmemiş
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<
    (number | string)[]
  >([]);

  const handlePriceRangeChange = (aralikId: number | string) => {
    setSelectedPriceRanges((current) =>
      current.includes(aralikId)
        ? current.filter((id) => id !== aralikId)
        : [...current, aralikId]
    );
  };

  const filteredProductsByPrice = (
    products: IProducts[],
    selectedPriceRanges: (number | string)[]
  ): IProducts[] => {
    if (selectedPriceRanges.length === 0) return products;
    return products.filter((product) =>
      selectedPriceRanges.some((rangesId) => {
        const aralik = priceRanges.find((aralik) => aralik.id === rangesId);
        if (!aralik) return false;
        return product.price >= aralik.min && product.price <= aralik.max;
      })
    );
  };

  return (
    <>
      <div>
        {priceRanges.map((aralik) => (
          <div key={aralik.id}>
            <input
              type="checkbox"
              checked={selectedPriceRanges.includes(aralik.id)}
              onChange={() => handlePriceRangeChange(aralik.id)}
            />
            {aralik.label}
          </div>
        ))}

        <Container>
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
                isInShoppingList={shopping.some(
                  (item) => item.id === product.id
                )}
                isInFavoritesList={favorite.some(
                  (item) => item.id === product.id
                )}
              />
            )
          )}
        </Container>
      </div>
    </>
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
