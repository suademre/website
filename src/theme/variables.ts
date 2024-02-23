import {
  IBreakpointSizes,
  IBreakpoints,
  IColor,
  IFont,
  IQueries,
} from "../types";

export const colors: IColor = {
  lightGreen: "#5f7264",
  white: "#fff",
  black: "#222",
  lightPink: "#f3edeb",
  red: "#dc3545",
  pink: "#e83e8c",
  orange: "#fd7e14",
  yellow: "#ffc107",
  blue: "#007bff",
  lightGray: "#979797",
};

export const font: IFont = {
  size: {
    xxxxsmall: "8px", //8px,
    xxxsmall: "12px", //12px,
    xxxsmallplus: "13px", //13px,
    xxsmall: "14px", //14px,
    xxsmallplus: "15px", //15px,
    xsmall: "16px", //16px
    small: "18px", //18px
    medium: "20px", //20px
    large: "25px", //25px
    xlarge: "28px", //28px
    xxlarge: "40px", //40px
    xxxlarge: "55px", //55px
  },
  weight: {
    regular: "400",
    semibold: "600",
    bold: "700",
  },
};

export const breakpoints: IBreakpoints = {
  xxs: 320,
  xxsMax: 319,
  xs: 480,
  xsMax: 479,
  sm: 576,
  smMax: 575,
  md: 768,
  mdMax: 767,
  lg: 992,
  lgMax: 991,
  xl: 1200,
  xlMax: 1199,
  xxl: 1460,
  xxlMax: 1459,
};
export const breakpointSizes: IBreakpointSizes = {
  xxs: `${breakpoints.xxs}px`,
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
  xxl: `${breakpoints.xxl}px`,
};

export const queries: IQueries = {
  xxs: `screen and (min-width: ${breakpoints.xxs}px)`,
  xxsMax: `screen and (max-width: ${breakpoints.xxsMax}px)`,
  xs: `screen and (min-width: ${breakpoints.xs}px)`,
  xsMax: `screen and (max-width: ${breakpoints.xsMax}px)`,
  sm: `screen and (min-width: ${breakpoints.sm}px)`,
  smMax: `screen and (max-width: ${breakpoints.smMax}px)`,
  md: `screen and (min-width: ${breakpoints.md}px)`,
  mdMax: `screen and (max-width: ${breakpoints.mdMax}px)`,
  lg: `screen and (min-width: ${breakpoints.lg}px)`,
  lgMax: `screen and (max-width: ${breakpoints.lgMax}px)`,
  xl: `screen and (min-width: ${breakpoints.xl}px)`,
  xlMax: `screen and (max-width: ${breakpoints.xlMax}px)`,
  xxl: `screen and (min-width: ${breakpoints.xxl}px)`,
  xxlMax: `screen and (max-width: ${breakpoints.xxlMax}px)`,
};
