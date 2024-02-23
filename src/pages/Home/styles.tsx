import styled from "styled-components";
import homePageImage from "../../assets/images/homeimage.jpeg";
import Image from "../../components/Image";

export const StyledContainer = styled.div`
  background-image: url(${homePageImage});
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

export const StyledImage = styled(Image)`
  width: 70%;
  height: 70%;
`;
export const StyledDiv = styled.div``;
