import React from "react";

type IconProps = {
  path: string;
  w: number;
  h: number;
};

const Icon: React.FC<IconProps> = ({ path, w, h }) => {
  return <img src={path} width={w} height={h} alt={`Icon`} />;
};

export default Icon;
