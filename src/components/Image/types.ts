export interface IImage {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  radius?: string;
  className?: React.ReactNode;
  onClick?: () => void;
}
