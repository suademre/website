import styled, { css } from "styled-components";
import { IIcon } from ".";
import { colors } from "../../theme/variables";

export const StyledIcon = styled.span<Omit<IIcon, "name">>`
  box-sizing: content-box;
  display: block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  min-width: ${({ size }) => size};
  min-height: ${({ size }) => size};
  cursor: ${({ onClick }) => onClick && "pointer"};
  border-radius: 30px;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${colors[bgColor]};
    `}

  svg {
    width: 100%;
    height: 100%;
  }
`;
