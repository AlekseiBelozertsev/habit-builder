import React from "react";
import { Card } from "../../components";
import { myHabits } from "../../config";
import { useNavigate } from "react-router";

type ScrollableCollectionProps = {
  title: string;
};

const ScrollableCollection: React.FC<ScrollableCollectionProps> = ({
  title,
}) => {
  const collection = myHabits;
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-full p-2 gap-2 rounded bg-white'>
      <h3 className={`font-['Roboto, font-sans'] font-bold`}>{title}</h3>
      <div
        className={`flex flex-row w-full gap-2 rounded overflow-y-auto max-h-[300px]`}
      >
        {collection.length ? (
          <>
            {collection.map((item, i) => (
              <Card
                key={i}
                imagePath={item.illustration}
                title={item.title}
                subtitle={item.subtitle}
                onClick={() => navigate(`${item.id}`)}
              />
            ))}
          </>
        ) : (
          <p
            className={`font-['Roboto, font-sans'] font-normal text-center w-full`}
          >{`List "${title}" is empty.`}</p>
        )}
      </div>
    </div>
  );
};

export default ScrollableCollection;
