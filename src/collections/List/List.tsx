import React from "react";
import { Habit, Streak } from "../../config";
import { useNavigate } from "react-router";
import { HabitComponent, StreakComponent } from "..";

type ListProps = {
  numOfRows?: number;
  elements: Habit[] | Streak[];
  component: "Habit" | "Streak";
};

const List: React.FC<ListProps> = ({ numOfRows, elements, component }) => {
  const habits = elements.slice(0, numOfRows);
  const navigate = useNavigate();
  return (
    <div className='grid lg:grid-cols-4 lg:gap-6 s:grid-cols-1 s:grid-rows-6 w-full h-full lg:pb-6 gap-0.5 divide-y divide-gray-200'>
      {component === "Habit"
        ? habits.map((item, i) => (
            <HabitComponent
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() => navigate(`/${item.id}`)}
              key={i}
            />
          ))
        : habits.map((item, i) => (
            <StreakComponent
              title={item.title}
              subtitle={item.subtitle}
              key={i}
            />
          ))}
    </div>
  );
};

export default List;
