import React from "react";
import { useNavigate } from "react-router";
import deleteUserApi from "../../Api/User/deleteUserApi";

const DeleteAccount = () => {
  const handelLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetail");
    window.location.href = "/";
  };

    const handelDelete = () => {
       deleteUserApi();
  };


  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 m-3 md:mx-10">
      {/* Delete Account Section */}
      <div className="flex-1 flex flex-col items-center text-center gap-4">
        <div className="text-black font-semibold text-2xl">Delete Account</div>
        <button
          className="w-full md:w-fit bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md border border-red-500 hover:border-red-700 shadow-md hover:shadow-lg transition-all duration-200"
             onClick={() => handelDelete()}
        >
          Delete Account
        </button>
      </div>

      {/* Logout Section */}
      <div className="flex-1 flex flex-col items-center text-center gap-4">
        <div className="text-black font-semibold text-2xl">Log Out</div>
        <button
          onClick={handelLogout}
          className="w-full md:w-fit bg-blue-900 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md border  hover:border-blue-700 shadow-md hover:shadow-lg transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
