import React from "react";
import { Container, Content } from "./styles";
import Icon from "../Icon";
import Flex from "../Flex";

export interface IPopup {
  children: React.ReactNode;
  showPopup: boolean;
  closePopup: () => void;
}

const Popup = ({ children, closePopup, showPopup }: IPopup) => {
  if (!showPopup) return null;
  return (
    <>
      {
        <Container onClick={closePopup}>
          <Content onClick={(e) => e.stopPropagation()}>
            <Flex justifyContent="end">
              <Icon name="close" color="orange" onClick={closePopup} />
            </Flex>
            {children}
          </Content>
        </Container>
      }
    </>
  );
};

export default Popup;
