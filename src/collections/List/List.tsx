import React from "react";
import { Habit } from "..";
import { allHabits } from "../../config";

type ListProps = {
  numOfRows: number;
};

const List: React.FC<ListProps> = ({ numOfRows }) => {
  const habits = allHabits.slice(0, numOfRows);
  console.log(habits);
  return (
    <div className='grid lg:grid-cols-4 lg:gap-6 s:grid-cols-1 s:grid-rows-6 w-full h-full lg:pb-6 gap-0.5 divide-y divide-gray-200'>
      {habits.map((item, i) => (
        <Habit
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          onClick={() => alert(`${item.title} clicked.`)}
          key={i}
        />
      ))}
    </div>
  );
};

export default List;
