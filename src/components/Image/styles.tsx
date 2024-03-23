import styled from "styled-components";
import { IImage } from "./types";

export const StyledImage = styled.img<IImage>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
`;
