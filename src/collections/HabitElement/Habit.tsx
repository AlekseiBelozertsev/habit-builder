import React from "react";
import { Button, Icon } from "../../components";
const dummyIcon = require("../../assets/dummy.svg").default;
const arrowIcon = require("../../assets/arrow.svg").default;

const Habit: React.FC = () => {
  return (
    <div className='flex container flex-row justify-between items-center rounded py-3 px-4 bg-white'>
      <div className='flex flex-row justify-center items-center gap-3'>
        <Icon h={18} w={18} path={dummyIcon} />
        <div className='flex-column justify-center items-center'>
          <h3 className={`font-['Roboto'] font-bold`}>{`Dummy title`}</h3>
          <span
            className={`font-['Roboto'] text-gray-600 text-sm`}
          >{`Dummy subtitle`}</span>
        </div>
      </div>
      <Button
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
  );
};

export default Habit;
