import styled from "styled-components";
import { colors } from "../../theme/variables";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.lightPink};
  padding: 30px;
  border-radius: 20px;
  min-width: 100px;
  min-height: 100px;
`;
