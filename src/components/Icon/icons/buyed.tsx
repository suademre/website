import { memo } from "react";
import { IIcon } from "..";
import { colors } from "../../../theme/variables";

const Buyed = ({ color = "black" }: Pick<IIcon, "color">) => {
  return (
    <svg fill={colors[color]} viewBox="0 0 448 512">
      <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </svg>
  );
};

export default memo(Buyed);
