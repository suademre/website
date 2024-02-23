import React from "react";
import BaseButton from "./styles";
import Icon, { icons } from "../Icon";

export interface IButton {
  children: React.ReactNode;
  theme?: "primary" | "secondary" | "danger" | "warning";
  size?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void | undefined;
  iconName?: keyof typeof icons;
}

const Button = ({
  children,
  onClick,
  theme = "primary",
  iconName,
}: IButton) => {
  return (
    <BaseButton themeProp={theme} onClick={onClick}>
      {children}
      {iconName && <Icon name={iconName} />}
    </BaseButton>
  );
};

export default Button;

// import { GreenButton, BlackButton } from "./styles";

// export interface IButton {
//   children: React.ReactNode;
//   theme?: "primary" | "secondary";
//   type?: "button" | "submit" | "reset";
//   onClick?: () => void | undefined;
// }

// const themes = {
//   primary: GreenButton,
//   secondary: BlackButton,
// };

// const Button = ({ children, onClick, theme, ...rest }: IButton) => {
//   const ButtonComponent = themes[theme as keyof typeof themes];
//   if (!ButtonComponent) return null;
//   return (
//     <ButtonComponent onClick={onClick} {...rest}>
//       {children}
//     </ButtonComponent>
//   );
// };

// Button.defaultProps = {
//   onClick: () => {},
//   type: "button",
//   theme: "primary",
// };

// export default Button;
