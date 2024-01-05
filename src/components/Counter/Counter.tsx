import React from "react";

type CounterProps = {
  label: string;
  value: number | string;
};

const Counter: React.FC<CounterProps> = ({ label, value }) => {
  return (
    <div className='flex flex-col w-full justify-center items-center gap-1'>
      <h3 className={`font-['Roboto, font-sans'] font-bold text-center`}>
        {label}
      </h3>
      <span className={`font-['Roboto, font-sans'] text-black text-base`}>
        {value}
      </span>
    </div>
  );
};

export default Counter;
