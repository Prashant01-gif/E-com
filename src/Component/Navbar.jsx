import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Button from './Navbar/Btn';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-2xl italic text-black p-2 sm:p-3 flex flex-wrap justify-between items-center sticky top-0 z-50 gap-2">
   
      <div className="flex items-center gap-2 sm:gap-4">
        <NavLink to={"/"}>
          <img src='img1.jpg' alt="logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
        </NavLink>
        <NavLink to={"/"}>
          <div className="text-xl sm:text-2xl font-semibold">Manrash</div>
        </NavLink>
      </div>


      <div className="flex flex-1 max-w-xs items-center border border-black rounded-full h-8 px-2">
        <input
          className="outline-none text-sm text-black w-full bg-transparent placeholder:text-black"
          type="text"
          placeholder="Search"
        />
        <button className="text-black text-lg">
          <FaSearch />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <NavLink to={"/Cart"}>
          <FaShoppingCart className="text-xl sm:text-2xl" />
        </NavLink>

        <Button title="Login" />
      </div>
    </nav>
  );
}

export default Navbar;
