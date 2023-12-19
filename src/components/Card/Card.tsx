import React from "react";

type CardProps = {
  imagePath: string;
  title: string;
  subtitle: string;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ title, subtitle, imagePath, onClick }) => {
  return (
    <div
      className='flex flex-col justify-start h-full gap-1 lg:gap-3'
      onClick={onClick}
    >
      <div className='flex align-middle justify-center p-1 rounded aspect-square w-24 lg:w-40 bg-slate-200'>
        <img
          src={imagePath}
          className={`w-1/2`}
          alt={`It's an image of "${title}" habit.`}
        />
      </div>
      <div className='flex flex-col justify-between'></div>
    </div>
  );
};

export default Card;
