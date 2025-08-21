import React from "react";
import getOrderApi from "../../Api/order/getOrderApi";
import { useState } from "react";
import OrderCard from "./OrderCart";

const Order = ({ order }) => {
  return (
    <div className="w-full p-4 bg-gradient-to-br from-red-50 to-red-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-max">
          {order.map((data, index) => (
            <OrderCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;