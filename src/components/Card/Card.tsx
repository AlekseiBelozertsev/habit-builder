import React from "react";

type CardProps = {
  imagePath: string;
  title: string;
  subtitle: string;
  onClick: () => void;
};

const Card: React.FC<CardProps> = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='rounded aspect-square w-24 lg:w-40 bg-slate-200'></div>
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
