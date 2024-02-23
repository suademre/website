export interface IImage {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: React.ReactNode;
  onClick?: () => void;
}
