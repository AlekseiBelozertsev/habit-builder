import React from "react";
import { ButtonProps } from ".";

const RectangleButton: React.FC<ButtonProps> = ({
  onClick,
  height,
  width,
  background,
  text,
  padding,
  textColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center border-none h-${height.toString()} py-1 px-2 ${background} rounded-full`}
    >
      <span className={`font-['Roboto, font-sans'] text-sm font-medium ${textColor}`}>
        {text}
      </span>
    </button>
  );
};

export default RectangleButton;
