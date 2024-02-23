import React from "react";
import { IImage } from "./types";
import { StyledImage } from "./styles";

const Image = ({ src, alt, width, height, onClick }: IImage) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
    ></StyledImage>
  );
};

export default Image;
