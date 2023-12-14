import { ButtonProps } from "../../components/Button";
import RoundButton from "../../components/Button/RoundButton";
import RectangleButton from "../../components/Button/RectangleButton";

export const buttonFactory = (props: ButtonProps) => {
  switch (props.type) {
    case "rectangle":
      return <RectangleButton {...props} />;
    case "round":
      return <RoundButton {...props} />;
  }
};
