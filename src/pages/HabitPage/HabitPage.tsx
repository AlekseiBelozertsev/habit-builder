import React from "react";
import { useParams } from "react-router-dom";
import { Habit } from "../../config";
import PageNotFound from "../PageNotFound/PageNotFound";

type HabitPageProps = {
  data: Habit[];
};

const HabitPage: React.FC<HabitPageProps> = ({ data }) => {
  const params = useParams();
  const currentPage = data.find((habit) => habit.id === params.id);
  if (currentPage) {
    return <div>{currentPage?.id}</div>;
  } else {
    return <PageNotFound />;
  }
};

export default HabitPage;
