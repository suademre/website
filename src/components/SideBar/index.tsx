import React from "react";
import { StyledContainer, StyledIcon } from "./styles";

export interface ISideBar {
  children?: React.ReactNode;
  showMenu?: boolean;
  toggleMenuHandler: () => void;
  data?: string[];
}

const SideBar = ({ children, showMenu, toggleMenuHandler }: ISideBar) => {
  return (
    <StyledContainer showMenu={showMenu}>
      <StyledIcon
        name="close"
        onClick={() => toggleMenuHandler()}
        color="orange"
      />
      {children}
    </StyledContainer>
  );
};

export default SideBar;
