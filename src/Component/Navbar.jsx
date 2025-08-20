import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Button from './Navbar/Btn';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineSettings } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";

function Navbar() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Log out successfully");
    navigate("/auth")
  }
  
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 text-gray-800 p-2 sm:p-3 flex flex-wrap justify-between items-center sticky top-0 z-50 gap-2">
      
      <div className="flex items-center gap-2 sm:gap-4">
        <NavLink to={"/"}>
          <img src='img1.jpg' alt="logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border border-gray-300" />
        </NavLink>
        <NavLink to={"/"}>
          <div className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Manrash</div>
        </NavLink>
      </div>
      
      <div className="flex flex-1 max-w-xs items-center bg-gray-50 border border-gray-300 rounded-lg h-10 px-3 hover:border-gray-400 focus-within:border-blue-500 focus-within:bg-white transition-all duration-200">
        <input
          className="outline-none text-sm text-gray-800 w-full bg-transparent placeholder:text-gray-500"
          type="text"
          placeholder="Search products..."
        />
        <button className="text-gray-600 hover:text-blue-600 text-lg transition-colors duration-200">
          <FaSearch />
        </button>
      </div>
      
      <div className="flex items-center gap-6 sm:gap-8 pr-2 sm:pr-5">
        <NavLink 
          to={"/Cart"}
          className="text-gray-700 hover:text-red-600 transition-colors duration-200"
        >
          <FaShoppingCart className="text-xl sm:text-2xl" />
        </NavLink>
        
        <NavLink 
          to={"/setting"}
          className="text-gray-700 hover:text-red-600 transition-colors duration-200"
        >
          <RiUserSettingsFill className="text-2xl sm:text-3xl" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;