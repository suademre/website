import React from "react";
import { IColumn } from "./type";
import { StyledColumn } from "./styles";

const Column = ({ children, cols }: IColumn) => {
  return <StyledColumn cols={cols}>{children}</StyledColumn>;
};

export default Column;
