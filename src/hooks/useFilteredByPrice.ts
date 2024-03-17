import { useState } from "react";
import { IProducts } from "../types";

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

const useFilteredByPrice = () => {
  // usestate without selecting any range at the beginning
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
  return {
    priceRanges,
    selectedPriceRanges,
    handlePriceRangeChange,
    filteredProductsByPrice,
  };
};

export default useFilteredByPrice;
