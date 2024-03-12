import styled from "styled-components";
import { colors } from "../../theme/variables";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 1000;
`;
export const Content = styled.div`
  background-color: white;
  padding: 20px;
  z-index: 1001;
  width: 500px;
  height: 500px;
  background-color: ${colors.lightPink};
  border-radius: 20px;
`;

// export const Container = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: ${colors.lightPink};
//   padding: 30px;
//   border-radius: 20px;
//   min-width: 100px;
//   min-height: 100px;
//   backdrop-filter: blur(5px);
// `;
