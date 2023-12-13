import React from "react";

type IconProps = {
  path: string | undefined;
  w: number;
  h: number;
};

const Icon: React.FC<IconProps> = ({ path, w }) => {
  const remToPx = (rem: number) => rem * 4 - 2;
  const iconSize = remToPx(w);
  return <img src={path} width={iconSize} height={iconSize} alt={`Icon`} />;
};

export default Icon;
