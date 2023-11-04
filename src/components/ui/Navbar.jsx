import React from "react";
import logo from "../../assets/icons/584830d9cef1014c0b5e4a9f.png";

const Navbar = () => {
  return (
    <div className="w-full flex items-center bg-[#e7fafd]">
      <div className="bg-stone-200 w-16 h-16 rounded-full mx-6 my-2 flex justify-center items-center">
        <img className="w-10 h-10" src={logo} alt="logo" />
      </div>
      <div className="flex justify-between w-full">
        <p>Тендеры</p>
        <ul className="flex">
          <li>Обучение</li>
          <li>Детали...</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
