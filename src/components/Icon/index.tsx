import React from "react";

import Menu from "./icons/menu";
import { colors } from "../../theme/variables";
import { StyledIcon } from "./styles";
import Close from "./icons/close";
import Liked from "./icons/liked";
import Like from "./icons/like";
import Buy from "./icons/buy";
import Buyed from "./icons/buyed";

export const icons = {
  menu: Menu,
  close: Close,
  like: Like,
  liked: Liked,
  buy: Buy,
  buyed: Buyed,
};

export interface IIcon {
  name: keyof typeof icons;
  size?: string;
  color?: keyof typeof colors;
  bgColor?: keyof typeof colors;
  padding?: string;
  margin?: string;
  onClick?: () => void;
  className?: string;
}

const Icon = ({
  name,
  size = "32px",
  color = "black",
  bgColor,
  padding,
  margin,
  onClick,
  className,
}: IIcon) => {
  const Icon = icons[name];
  return Icon ? (
    <StyledIcon
      size={size}
      bgColor={bgColor}
      padding={padding}
      margin={margin}
      onClick={onClick}
      className={className}
    >
      <Icon color={color} />
    </StyledIcon>
  ) : null;
};

export default Icon;
