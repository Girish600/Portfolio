import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate= useNavigate();
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex px-4 justify-between items-center w-full h-20 bg-black text-white fixed">
      <div>
        <h1 className="text-5xl ml-2">Girish.</h1>
      </div>
      <ul className="hidden md:flex">
        <NavLink to={'/'} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          Home
        </NavLink>
        <NavLink to={'/about'} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          About
        </NavLink>
        <NavLink to={'/portfolio'} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          PortFolio
        </NavLink>
        <NavLink to={'/expeirence'} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          Expeirence
        </NavLink>
        <NavLink to={'/contact'} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          Contact
        </NavLink>
      </ul>
      <div
        onClick={() => setShowNav(!showNav)}
        className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {showNav && (
        <ul className="flex flex-col justify-center h-screen w-full absolute top-0 left-0 items-center bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-4 cursor-pointer py-6 capitalize text-4xl">Home</li>
          <li className="px-4 cursor-pointer py-6 capitalize text-4xl">
            About
          </li>
          <li className="px-4 cursor-pointer py-6 capitalize text-4xl">
            PortFolio
          </li>
          <li className="px-4 cursor-pointer py-6 capitalize text-4xl">
            Expeirence
          </li>
          <li className="px-4 cursor-pointer py-6 capitalize text-4xl">
            Contact
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
