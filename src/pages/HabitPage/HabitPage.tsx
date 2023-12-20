import React from "react";
import { useParams } from "react-router-dom";
import { Habit } from "../../config";

type HabitPageProps = {
  data: Habit[];
};

const HabitPage: React.FC<HabitPageProps> = ({ data }) => {
  const params = useParams();
  const currentPage = data.find((habit) => habit.id === params.id);
  return <div>{currentPage?.id}</div>;
};

export default HabitPage;
