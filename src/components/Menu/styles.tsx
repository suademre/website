import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors, font } from "../../theme/variables";
import { IMenuItem } from "./MenuItem";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const StyledLink = styled(Link)<Pick<IMenuItem, "isActive">>`
  color: ${colors.orange};
  text-decoration: none;
  padding: 10px 0;
  font-size: ${font.size.small};
  transition: color, 0.3s ease-in;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.lightGreen};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${colors.blue};
    `}
`;
