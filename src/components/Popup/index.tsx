import React from "react";
import { Container } from "./styles";
import Icon from "../Icon";
import Flex from "../Flex";

export interface IPopup {
  children: React.ReactNode;
  // showPopup: boolean;
  // setShowPopup: () => void;
}

const Popup = ({ children }: IPopup) => {
  return <>{<Container>{children}</Container>}</>;
};

export default Popup;
