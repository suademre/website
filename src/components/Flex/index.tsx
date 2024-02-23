import { StyledFlex } from "./styles";
import { IFlex } from "./types";

const Flex = ({
  children,
  height,
  width,
  flexDirection,
  justifyContent,
  alignItems,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: IFlex) => (
  <StyledFlex
    height={height}
    width={width}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
  >
    {children}
  </StyledFlex>
);

export default Flex;
