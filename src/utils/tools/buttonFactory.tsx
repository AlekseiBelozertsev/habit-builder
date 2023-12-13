import React from "react";
import { ButtonProps, ButtonType } from "../../components/Button";
import RoundButton from "../../components/Button/RoundButton";

export const buttonFactory = (props: ButtonProps) => {
  switch (props.type) {
    case "rectangle":
      return null;
    case "round":
      return <RoundButton {...props} />;
  }
};
