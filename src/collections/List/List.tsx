import React from "react";
import { Habit } from "../../config";
import { useNavigate } from "react-router";
import { HabitComponent } from "..";

type ListProps = {
  numOfRows: number;
  elements: Habit[];
};

const List: React.FC<ListProps> = ({ numOfRows, elements }) => {
  const habits = elements.slice(0, numOfRows);
  const navigate = useNavigate();
  return (
    <div className='grid lg:grid-cols-4 lg:gap-6 s:grid-cols-1 s:grid-rows-6 w-full h-full lg:pb-6 gap-0.5 divide-y divide-gray-200'>
      {habits.map((item, i) => (
        <HabitComponent
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          onClick={() => navigate(`/${item.id}`)}
          key={i}
        />
      ))}
    </div>
  );
};

export default List;
