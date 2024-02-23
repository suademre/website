import styled, { css } from "styled-components";
import { IDiv } from ".";

export const StyledDiv = styled.div<Omit<IDiv, "children">>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`;
