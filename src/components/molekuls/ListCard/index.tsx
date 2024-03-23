import React, { useState } from "react";
import { Wrapper } from "./styles";
import Flex from "../../Flex";
import Image from "../../Image";
import Icon from "../../Icon";

export interface IListCard {
  imageFrond: string;
  title: string;
  price: number;
  quantity: number;
  //   setQuantity?: (quantity: number) => void;
  quantityRechner: (value: string) => void;
}

const ListCard = ({
  imageFrond,
  title,
  price,
  quantity,
  quantityRechner,
}: IListCard) => {
  return (
    <Wrapper>
      <Flex justifyContent="space-between" width="100%">
        <Image src={imageFrond} alt={title} width="100px" radius="10px" />
        <Flex flexDirection="column" alignItems="center" marginLeft="10px">
          <h3>Title</h3>
          <div>{title}</div>
        </Flex>
        <Flex
          alignItems="center"
          width="110px"
          justifyContent="space-between"
          marginRight="5px"
        >
          <Icon name="decrease" onClick={() => quantityRechner("decrease")} />

          <div>{quantity}</div>

          <Icon name="increase" onClick={() => quantityRechner("increase")} />
        </Flex>
        <Flex flexDirection="column">
          <h5>Einziel Price</h5>
          <p>{price}€</p>
        </Flex>
        <Flex flexDirection="column">
          <h5>Gesamt Price</h5>
          <p>{price}€</p>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default ListCard;
