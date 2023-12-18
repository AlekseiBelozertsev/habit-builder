import React from "react";
import { Card } from "../../components";

const ScrollableCollection: React.FC = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-row w-full bg-white p-2 rounded overflow-y-auto max-h-[300px]'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ScrollableCollection;
