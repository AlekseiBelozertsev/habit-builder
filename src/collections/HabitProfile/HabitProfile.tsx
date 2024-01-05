import React from "react";
import { Icon } from "../../components";
import { Habit, Streak } from "../../config";

type HabitProfileProps = {
  entity: Habit;
};

const HabitProfile: React.FC<HabitProfileProps> = ({ entity }) => {
  return (
    <div className='flex flex-col w-full justify-center items-center py-12'>
      <div className='flex flex-col justify-center items-center p-7 rounded-full bg-white'>
        <Icon h={18} w={18} path={entity?.illustration} />
      </div>
      <h3 className={`font-['Roboto, font-sans'] font-bold text-center`}>
        {entity?.title}
      </h3>
      <span className={`font-['Roboto, font-sans'] text-gray-600 text-sm`}>
        {entity?.subtitle}
      </span>
    </div>
  );
};

export default HabitProfile;
