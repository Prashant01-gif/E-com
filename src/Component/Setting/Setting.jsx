import React from "react";
import Navbar from "../Navbar";
import General from "./Components/General";
import Location from "./Components/Location";
import Password from "./Components/Password";
import DeleteAccount from "./Components/DeleteAccount";

const Setting = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" flex flex-col my-4 gap-4">
        <General />
        <Location />
        <Password />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Setting;