export interface IColor {
  lightGreen: string;
  white: string;
  black: string;
  lightPink: string;
  red: string;
  pink: string;
  orange: string;
  yellow: string;
  blue: string;
  lightGray: string;
}

export interface IFont {
  size: {
    xxxxsmall: string;
    xxxsmall: string;
    xxxsmallplus: string;
    xxsmall: string;
    xxsmallplus: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  };
  weight: {
    regular: string;
    semibold: string;
    bold: string;
  };
}

export interface IBreakpoints {
  xxs: number;
  xxsMax: number;
  xs: number;
  xsMax: number;
  sm: number;
  smMax: number;
  md: number;
  mdMax: number;
  lg: number;
  lgMax: number;
  xl: number;
  xlMax: number;
  xxl: number;
  xxlMax: number;
}

export type IBreakpointsPartial = Partial<IBreakpoints>;

export interface IBreakpointSizes {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface IQueries {
  xxs: string;
  xxsMax: string;
  xs: string;
  xsMax: string;
  sm: string;
  smMax: string;
  md: string;
  mdMax: string;
  lg: string;
  lgMax: string;
  xl: string;
  xlMax: string;
  xxl: string;
  xxlMax: string;
}

// data interface

export interface ICategories {
  id: number;
  slug: string;
  icon: string;
  title: string;
  description: string;
  size: ['"S", "M", "L", "XL", "2XL"'];
}

export interface IProducts {
  id: string;
  title: string;
  price: number;
  imageFrond: string;
  imageBack: string;
  category: {
    id: number;
    title: string;
  };
  slug: string;
}

export interface IDatabase {
  categories: ICategories[];
  products: IProducts[];
}
