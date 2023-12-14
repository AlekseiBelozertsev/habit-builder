import React from "react";
import { ButtonProps } from ".";

const RectangleButton: React.FC<ButtonProps> = ({
  onClick,
  height,
  width,
  background,
  text,
  textColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center border-none h-${height} ${background} px-2 rounded-full`}
    >
      <span className={`font-['Roboto'] text-sm font-medium ${textColor}`}>
        {text}
      </span>
    </button>
  );
};

export default RectangleButton;
