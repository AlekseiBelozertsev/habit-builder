import React from "react";

type StreakComponentProps = {
  title: string;
  subtitle: string;
};

const StreakComponent: React.FC<StreakComponentProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className='w-full h-5'>
      <h3 className={`font-['Roboto, font-sans'] font-bold`}>{title}</h3>
      {/* <span className={`font-['Roboto, font-sans'] text-gray-600 text-sm`}>
        {subtitle}
      </span> */}
    </div>
  );
};

export default StreakComponent;
