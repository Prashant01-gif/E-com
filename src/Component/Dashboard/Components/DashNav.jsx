import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-[280px] md:w-[15%] bg-white shadow-xl shadow-gray-100/50 p-4 sm:p-6 space-y-2 sm:space-y-3 border-r border-gray-100 min-h-screen">
      <div
        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${
          activeScreen == 1 
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 transform scale-105" 
            : "bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 hover:shadow-lg hover:shadow-red-100/50 hover:scale-102"
        }`}
        onClick={() => setActiveScreen(1)}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 transition-opacity duration-300 ${activeScreen != 1 && "group-hover:opacity-100"}`}></div>
        <RiDashboardFill className={`text-lg sm:text-xl transition-all duration-300 relative z-10 ${activeScreen == 1 ? "scale-110 drop-shadow-sm" : "group-hover:scale-110 group-hover:text-red-600"}`} />
        <span className="font-semibold text-sm sm:text-base tracking-wide relative z-10">Dashboard</span>
      </div>
      
      <div
        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${
          activeScreen == 2 
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 transform scale-105" 
            : "bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 hover:shadow-lg hover:shadow-red-100/50 hover:scale-102"
        }`}
        onClick={() => setActiveScreen(2)}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 transition-opacity duration-300 ${activeScreen != 2 && "group-hover:opacity-100"}`}></div>
        <RiDashboardFill className={`text-lg sm:text-xl transition-all duration-300 relative z-10 ${activeScreen == 2 ? "scale-110 drop-shadow-sm" : "group-hover:scale-110 group-hover:text-red-600"}`} />
        <span className="font-semibold text-sm sm:text-base tracking-wide relative z-10">Order</span>   
      </div>

      <div
        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${
          activeScreen == 3 
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 transform scale-105" 
            : "bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 hover:shadow-lg hover:shadow-red-100/50 hover:scale-102"
        }`}
        onClick={() => navigate("/Productdata")}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 transition-opacity duration-300 ${activeScreen != 3 && "group-hover:opacity-100"}`}></div>
        <RiDashboardFill className={`text-lg sm:text-xl transition-all duration-300 relative z-10 ${activeScreen == 3 ? "scale-110 drop-shadow-sm" : "group-hover:scale-110 group-hover:text-red-600"}`} />
        <span className="font-semibold text-sm sm:text-base tracking-wide relative z-10">Add Product</span>
      </div>
    </div>
  );
};

export default DashNav;