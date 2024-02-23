import React, { useState } from "react";
import { StyledDiv } from "./styles";
import Image from "../../Image";
import Flex from "../../Flex";
import Icon from "../../Icon";
import Popup from "../../Popup";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/api/useFetchData";
import Div from "../../Div";

export interface ICard {
  imageFrond: string;
  title: string;
  price: number;
  onAddShopping: () => void;
  onAddFavorites: () => void;
  isInShoppingList: boolean;
  isInFavoritesList: boolean;
}

const Card = ({
  imageFrond,
  title,
  price,
  onAddShopping,
  isInShoppingList,
  onAddFavorites,
  isInFavoritesList,
}: ICard) => {
  console.log("isInShoppingList: ", isInShoppingList);
  const [showMenu, setShoMenu] = useState(false);
  const { slug } = useParams();
  console.log("slug.useParams: ", slug);

  const { data: categories } = useFetchData("categories");

  const categoriesDes = categories.filter((item) => item.slug === slug);
  console.log("categoriesDes: ", categoriesDes);
  return (
    <>
      <StyledDiv>
        <Image
          src={imageFrond}
          alt={title}
          width="300px"
          onClick={() => setShoMenu(true)}
        />
        <Flex justifyContent="space-around">
          <p>{title}</p>
          <p>{price} €</p>
        </Flex>
        <Flex
          justifyContent="space-between"
          width="90%"
          alignItems="center"
          marginLeft="5%"
          marginBottom="30px"
        >
          {isInShoppingList ? (
            <Icon name="buyed" onClick={onAddShopping} />
          ) : (
            <Icon name="buy" onClick={onAddShopping} />
          )}
          {isInFavoritesList ? (
            <Icon name="liked" onClick={onAddFavorites} />
          ) : (
            <Icon name="like" onClick={onAddFavorites} />
          )}
        </Flex>
      </StyledDiv>
      {showMenu && (
        <Popup>
          <Flex justifyContent="end">
            <Icon
              name="close"
              color="orange"
              onClick={() => setShoMenu(false)}
            />
          </Flex>
          <Flex justifyContent="center">
            <Image src={imageFrond} alt={title} width="300px" />
          </Flex>
          <p>
            <h3>Description:</h3>
            {categoriesDes[0].description}
          </p>
          <h3>Options</h3>
          <Flex>
            {categoriesDes[0].size.map((item: any, index: any) => (
              <Div key={index} marginLeft="5px">
                <span>{item}</span>
              </Div>
            ))}
          </Flex>
        </Popup>
      )}
    </>
  );
};

export default Card;
