import { colors } from "../../theme/variables";
import { StyledDiv } from "./styles";

export interface IDiv {
  children: React.ReactNode;
  width?: string;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  bgColor?: keyof typeof colors;
  onClick?: () => void;
}

const Div = ({
  children,
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  bgColor,
  onClick,
}: IDiv) => {
  return (
    <StyledDiv
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
