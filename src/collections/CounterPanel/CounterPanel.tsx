import React from "react";
import { Counter } from "../../components";

const mockData = [
  {
    label: "All streaks",
    value: 3,
  },
  {
    label: "in progress",
    value: 0,
  },
  {
    label: "Status",
    value: "Incomplete",
  },
];

const CounterPanel = () => {
  return (
    <div className='flex flex-row py-4 w-full justify-between items-center'>
      {mockData.map((item, i) => {
        return <Counter label={item.label} value={item.value} key={i} />;
      })}
    </div>
  );
};

export default CounterPanel;
