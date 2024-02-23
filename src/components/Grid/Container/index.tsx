import { StyledContainer } from "./styles";

import { IContainer } from "./types";

const Container = ({ children }: IContainer) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
