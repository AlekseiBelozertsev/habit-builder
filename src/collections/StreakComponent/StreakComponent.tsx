import React from "react";
import { Icon } from "../../components";
const arrowIcon = require("../../assets/arrowDown.svg").default;

type StreakComponentProps = {
  title: string;
  subtitle: string;
};

const StreakComponent: React.FC<StreakComponentProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className='flex flex-row justify-between items-center w-full h-16'>
      <div className='flex flex-col'>
        <h3 className={`font-['Roboto, font-sans'] font-bold`}>{title}</h3>
        <span className={`font-['Roboto, font-sans'] text-gray-600 text-sm`}>
          {subtitle}
        </span>
      </div>
      <Icon h={5} w={5} path={arrowIcon} />
    </div>
  );
};

export default StreakComponent;
