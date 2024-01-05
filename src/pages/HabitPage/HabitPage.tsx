import React from "react";
import { useParams } from "react-router-dom";
import { Habit, Streak, allStreaks } from "../../config";
import PageNotFound from "../PageNotFound/PageNotFound";
import { Icon } from "../../components";
import { CounterPanel, HabitProfile, List } from "../../collections";

type HabitPageProps = {
  data: Habit[];
};

const HabitPage: React.FC<HabitPageProps> = ({ data }) => {
  const params = useParams();
  const entity = data.find((habit) => habit.id === params.id);
  if (entity) {
    return (
      <div className='flex flex-col h-full w-full px-4 justify-top items-center'>
        <HabitProfile entity={entity} />
        <CounterPanel />
        <List component='Streak' elements={entity?.streaks} />
      </div>
    );
  } else {
    return <PageNotFound />;
  }
};

export default HabitPage;
