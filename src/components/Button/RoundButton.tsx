import React from "react";
import Icon from "../Icon/Icon";
import { ButtonProps } from ".";

const RoundButton: React.FC<ButtonProps> = ({
  onClick,
  iconPath,
  height,
  width,
  padding,
  background,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center border-none p-${padding.toString()} w-${width.toString()} h-${height.toString()} ${background} rounded-full`}
    >
      <Icon h={height} w={width} path={iconPath} />
    </button>
  );
};

export default RoundButton;
