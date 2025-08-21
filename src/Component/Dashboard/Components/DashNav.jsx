import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-[220px] md:w-[15%] bg-white shadow-xl shadow-gray-100/50 p-2 sm:p-4 space-y-2 sm:space-y-3 border-r border-gray-100 min-h-screen">
      {/* Dashboard */}
      <NavItem
        title="Dashboard"
        icon={<RiDashboardFill />}
        active={activeScreen === 1}
        onClick={() => setActiveScreen(1)}
      />
      {/* Order */}
      <NavItem
        title="Order"
        icon={<RiDashboardFill />}
        active={activeScreen === 2}
        onClick={() => setActiveScreen(2)}
      />
      {/* Add Product */}
      <NavItem
        title="Add Product"
        icon={<RiDashboardFill />}
        active={activeScreen === 3}
        onClick={() => navigate("/Productdata")}
      />
    </div>
  );
};

// Nav Item Component
const NavItem = ({ title, icon, active, onClick }) => (
  <div
    className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${
      active
        ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 transform scale-105"
        : "bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 hover:shadow-lg hover:shadow-red-100/50 hover:scale-102"
    }`}
    onClick={onClick}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 transition-opacity duration-300 ${
        !active && "group-hover:opacity-100"
      }`}
    ></div>
    <div
      className={`text-base sm:text-lg transition-all duration-300 relative z-10 ${
        active ? "scale-110 drop-shadow-sm" : "group-hover:scale-110 group-hover:text-red-600"
      }`}
    >
      {icon}
    </div>
    <span className="font-semibold text-xs sm:text-sm md:text-base tracking-wide relative z-10">
      {title}
    </span>
  </div>
);

export default DashNav;
