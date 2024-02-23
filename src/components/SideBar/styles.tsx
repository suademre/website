import styled, { css } from "styled-components";
import { ISideBar } from ".";
import Icon from "../Icon";

export const StyledContainer = styled.div<Pick<ISideBar, "showMenu">>`
  width: 280px;
  min-height: 100vh;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
  background-color: #c9c0c0;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 10;
  transition: 0.5s;
  padding: 50px 30px;
  ${({ showMenu }) =>
    showMenu &&
    css`
      left: 0;
    `}
`;

export const StyledIcon = styled(Icon)`
  margin-left: auto;
  /* padding: 20px; */
`;
