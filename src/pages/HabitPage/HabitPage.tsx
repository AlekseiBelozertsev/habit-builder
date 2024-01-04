import React from "react";
import { useParams } from "react-router-dom";
import { Habit, Streak, allStreaks } from "../../config";
import PageNotFound from "../PageNotFound/PageNotFound";
import { Icon } from "../../components";
import { List } from "../../collections";

type HabitPageProps = {
  data: Habit[];
};

const HabitPage: React.FC<HabitPageProps> = ({ data }) => {
  const params = useParams();
  const currentPage = data.find((habit) => habit.id === params.id);
  if (currentPage) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center p-7 rounded-full bg-white'>
          <Icon h={18} w={18} path={currentPage?.illustration} />
        </div>
        <h3 className={`font-['Roboto, font-sans'] font-bold text-center`}>
          {currentPage?.title}
        </h3>
        <span className={`font-['Roboto, font-sans'] text-gray-600 text-sm`}>
          {currentPage?.subtitle}
        </span>
        <List component='Streak' elements={currentPage?.streaks} />
      </div>
    );
  } else {
    return <PageNotFound />;
  }
};

export default HabitPage;
