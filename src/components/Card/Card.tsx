import React from "react";

const Card: React.FC = () => {
  return (
    <div className='flex flex-col gap-3 p-2'>
      <div className='rounded aspect-square max-h-24 max-w-24 bg-slate-200'></div>
      <div className='flex flex-col'>
        <h3
          className={`font-['Roboto, font-sans'] font-bold `}
        >{`Dummy title`}</h3>
        <span
          className={`font-['Roboto, font-sans'] text-gray-600 text-sm`}
        >{`Dummy subtitle`}</span>
      </div>
    </div>
  );
};

export default Card;
