import React from "react";
import { IRow } from "./type";
import { StyledRow } from "./styles";

const Row = ({ children }: IRow) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
