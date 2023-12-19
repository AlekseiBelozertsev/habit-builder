import React from "react";
import { Button } from "../../components";
const dummyIcon = require("../../assets/dummy.svg").default;
const arrowIcon = require("../../assets/arrow.svg").default;

type HabitProps = {
  id: string;
  title: string;
  subtitle: string;
  onClick: () => void;
};

const Habit: React.FC<HabitProps> = ({ title, subtitle, onClick }) => {
  return (
    <div
      className='flex w-full lg:flex-col flex-row lg:justify-center justify-between items-center rounded py-2 lg:py-4 px-4 bg-white'
      onClick={onClick}
    >
      <div className='flex lg:flex-col flex-row justify-center items-center gap-3'>
        <div className='aspect-square w-9 lg:w-24'>
          <img className={`w-full`} src={dummyIcon} alt='Picture' />
        </div>
        <div className='flex-column lg:h-full lg:text-center justify-center items-center'>
          <h3 className={`font-['Roboto, font-sans'] font-bold`}>{title}</h3>
          <span className={`font-['Roboto, font-sans'] text-gray-600 text-sm`}>
            {subtitle}
          </span>
        </div>
      </div>
      <div className={`flex justify-center items-center lg:hidden`}>
        <Button
          padding={0}
          height={6}
          width={6}
          iconPath={arrowIcon}
          background={`bg-slate-200`}
          onClick={() => alert("Hahaha, you dead.")}
          type={`round`}
        />
      </div>
    </div>
  );
};

export default Habit;
