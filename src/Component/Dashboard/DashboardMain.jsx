import React, { useEffect, useState } from "react";
import DashNav from "./Components/DashNav";
import Dashboard from "./Components/Dashboard";
import Order from "./Components/Order";
import getOrderApi from "../Api/order/getOrderApi";
import { useOutlet, useOutletContext } from "react-router";


const DashboardMain = () => {

     const userData = JSON.parse(localStorage.getItem("userDetail"));
  if(!userData || userData.role !=="admin"){
    console.log("i am admin");
    window.location.href = "/"
  }

  const mainData = useOutletContext();
  const [activeScreen, setActiveScreen] = useState(1);
  const [orderData, setOrderData] = useState([]);
  useEffect(() =>{
    getOrderApi(setOrderData);
  } , []);
   return (
    <div className="flex h-[100vh] bg-sky-50">
      <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {activeScreen == 1 &&( 
        <Dashboard order={orderData} productData={mainData} />)}
      {activeScreen == 2 && <Order order={orderData}/>}
    </div>
  );
};

export default DashboardMain;
