import styled from "styled-components";
import { IColumn } from "./type";
import { makeStyledMedia } from "../../../theme/media";
import { queries } from "../../../theme/variables";

type IStyledColumn = Omit<IColumn, "children">;

export const StyledColumn = styled.div<IStyledColumn>`
  position: relative;
  padding: 0 16px;
  flex-basis: 100%;
  flex-grow: 1;
  max-width: 100%;
  ${(props) =>
    props.cols &&
    Object.entries(props.cols).map(
      ([breakpoint, col]) =>
        makeStyledMedia(queries[breakpoint as keyof typeof queries])`
            flex: 0 1 ${(col / 12) * 100}%;
            max-width: ${(col / 12) * 100}%;
        `
    )}
`;
