import { buttonFactory } from "../../utils/tools/buttonFactory";

export type ButtonType = "rectangle" | "round";

export type ButtonProps = {
  type: ButtonType;
  onClick: () => void;
  iconPath?: string;
  width: number;
  height: number;
  background: string;
  text?: string;
  textColor?: string;
};

const Button = (props: ButtonProps) => {
  return buttonFactory(props);
};

export default Button;
