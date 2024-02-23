import styled from "styled-components";

import { IFlex } from "./types";

type IStyledFlex = Omit<IFlex, "children">;

export const StyledFlex = styled.div<IStyledFlex>`
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
`;
