import React from "react";
import { Button } from "../../components";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className='flex flex-row justify-between items-center px-4 h-16'>
      <h2 className={`font-['Roboto', font-sans] font-bold`}>{title}</h2>
      <Button
        padding={2}
        height={9}
        width={6}
        textColor={`text-color`}
        background={`bg-slate-300`}
        onClick={() => alert("Hahaha, you dead.")}
        type={`rectangle`}
        text={`Show all`}
      />
    </div>
  );
};

export default SectionHeader;
