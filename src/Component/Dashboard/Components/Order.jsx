import React from "react";
import getOrderApi from "../../Api/order/getOrderApi";
import { useState } from "react";
import OrderCard from "./OrderCart";

const Order = ({order}) => {
  
  return <>
    {order.map((data)=>(
      <OrderCard data={data}/>
    ))}
  </>;
};

export default Order;
