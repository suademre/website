import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../theme/variables";

export const Container = styled.div`
  position: absolute;
  width: 75%;
  left: 50%;
  top: 20px;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: ${colors.yellow};
  padding: 1rem 5rem;
  text-decoration: none;
`;
