import React from "react";
import { Button } from "../../components";
const dummyIcon = require("../../assets/dummy.svg").default;
const arrowIcon = require("../../assets/arrow.svg").default;

const Habit: React.FC = () => {
  return (
    <div className='flex w-full lg:flex-col flex-row lg:justify-center justify-between items-center rounded py-3 px-4 bg-white'>
      <div className='flex lg:flex-col flex-row justify-center items-center gap-3'>
        <div>
          <img className={`w-full`} src={dummyIcon} alt='Picture' />
        </div>
        <div className='flex-column lg:h-full lg:text-center justify-center items-center'>
          <h3 className={`font-['Roboto, font-sans'] font-bold`}>{`Dummy title`}</h3>
          <span
            className={`font-['Roboto, font-sans'] text-gray-600 text-sm`}
          >{`Dummy subtitle`}</span>
        </div>
      </div>
      <div className={`flex justify-center items-center lg:hidden`}>
        <Button
          padding={0}
          height={6}
          width={6}
          iconPath={arrowIcon}
          background={`bg-slate-200`}
          onClick={() =>
            alert("Hahaha, you dead and you shit yourself and also peed.")
          }
          type={`round`}
        />
      </div>
    </div>
  );
};

export default Habit;
