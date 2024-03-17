import styled from "styled-components";
import { colors } from "../../theme/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 80px 30px 20px;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const FilteredPrice = styled.div`
  margin-top: 300px;
  margin-left: 30px;
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 5px;
    bottom: 0;
    left: 5px;
    background-color: ${colors.lightGreen}; /* Veya tercih ettiğiniz bir renk */
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &:after {
      visibility: visible;
      width: 60%;
    }
  }
`;
