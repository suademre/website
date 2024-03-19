import { memo } from "react";
import { IIcon } from "..";
import { colors } from "../../../theme/variables";

const Decrease = ({ color = "black" }: Pick<IIcon, "color">) => {
  return (
    <svg fill={colors[color]} viewBox="0 0 300.003 300.003">
      <path
        d="M150.001,0c-82.843,0-150,67.159-150,150c0,82.838,67.157,150.003,150,150.003c82.838,0,150-67.165,150-150.003
         C300.001,67.159,232.838,0,150.001,0z M197.218,166.283H92.41c-8.416,0-15.238-6.821-15.238-15.238s6.821-15.238,15.238-15.238
         H197.22c8.416,0,15.238,6.821,15.238,15.238S205.634,166.283,197.218,166.283z"
      />
    </svg>
  );
};

export default memo(Decrease);
