import styled, { css } from "styled-components";
import { colors } from "../../theme/variables";

const buttonStyles = {
  primary: css`
    background-color: ${colors.lightGreen};
    padding: 1rem 5rem;
  `,
  secondary: css`
    background-color: ${colors.black};
    padding: 1rem 6rem;
  `,
  danger: css`
    background-color: ${colors.red};
    padding: 1rem 2rem;
  `,
  warning: css`
    background-color: ${colors.yellow};
    padding: 1rem 2rem;
  `,
};

type ButtonTheme = keyof typeof buttonStyles;

const BaseButton = styled.button<{ themeProp: ButtonTheme }>`
  text-align: center;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 30px;
  ${({ themeProp }) => buttonStyles[themeProp]};
`;

export default BaseButton;

// const BaseButton = styled.button`
//   display: inline-block;
//   text-align: center;
//   color: white;
//   border: none;
// `;

// export const GreenButton = styled(BaseButton)`
//   background-color: ${colors.lightGreen};
//   padding: 1rem 5rem;
// `;
// export const BlackButton = styled(BaseButton)`
//   background-color: ${colors.black};
//   padding: 1rem 6rem;
// `;

// export const Button = styled.button<{ theme: "primary" | "secondary" }>`
//   display: inline-block;
//   text-align: center;
//   color: white;
//   border: none;
//   background-color: ${(props) =>
//     props.theme === "primary" ? colors.lightGreen : colors.black};
//   padding: 1rem 5rem;
// `;
