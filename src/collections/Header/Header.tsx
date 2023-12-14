import React from "react";
import { Button } from "../../components";
const menuIcon = require("../../assets/menu.svg").default;
const searchIcon = require("../../assets/search.svg").default;

const Header: React.FC = () => {
  return (
    <header className='flex w-screen container flex-row justify-between items-center rounded-b px-4 py-2 bg-white'>
      <div className='flex flex-col'>
        <h1 className={`font-['Roboto'] font-bold`}>{"Habits to build"}</h1>
        <span className="font-['Roboto'] text-sm font-normal">
          {"Choose from available"}
        </span>
      </div>
      <div className='flex flex-row gap-2'>
        <Button
          height={6}
          width={6}
          iconPath={searchIcon}
          background={``}
          onClick={() => alert("Hahaha, you dead.")}
          type={`round`}
        />
        <Button
          height={6}
          width={6}
          iconPath={menuIcon}
          background={`bg-slate-200`}
          onClick={() => alert("Hahaha, you dead and you shit yourself.")}
          type={`round`}
        />
      </div>
    </header>
  );
};

export default Header;
