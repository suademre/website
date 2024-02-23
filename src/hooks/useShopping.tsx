import { IProducts } from "../types";
import { useShoppingContext } from "../context/ShoppingContext";

const useShopping = () => {
  const { shopping, setShopping } = useShoppingContext();
  const handleShoppings = (product: IProducts) => {
    const isBasket = shopping.includes(product);
    let newBaskets;
    if (isBasket) {
      newBaskets = shopping.filter((item: IProducts) => item.id !== product.id);
    } else {
      newBaskets = shopping.concat(product);
    }
    setShopping(newBaskets);
  };
  return { shopping, handleShoppings };
};

export default useShopping;
