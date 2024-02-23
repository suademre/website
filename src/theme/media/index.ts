import { css } from "styled-components";

export const makeStyledMedia =
  (query: string) =>
  (...args: Parameters<typeof css>) =>
    css`
      @media ${query} {
        ${css(...args)}
      }
    `;
