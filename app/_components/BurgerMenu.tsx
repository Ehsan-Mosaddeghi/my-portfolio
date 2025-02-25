import React from "react";

const BurgerMenu = ({ isMenuOpen, onClick }: { isMenuOpen: boolean; onClick: () => void }) => {
  return (
    <div className="flex md:hidden flex-col gap-1 cursor-pointer" onClick={onClick}>
      <div
        className={`block w-[18px] h-[2px] bg-text duration-300 ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
      ></div>
      <div className={`block w-[18px] h-[2px] bg-text duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
      <div
        className={`block w-[18px] h-[2px] bg-text duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[6px] " : ""}`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
