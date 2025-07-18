import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Cartcart from "./Cartcart";
import Totalamount from "../CustomFunction/Totalamount";
import Button from "../Navbar/Btn";
import CheckOutModal from "./CheckOutModal";

const Cart = () => {
  let data = localStorage.getItem("cart ");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar />

      <div>
        {cart.map((item, index) => (
          <Cartcart item={item} setCart={setCart} key={index} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
        <div className="flex gap-2 text-lg items-center">
          <div className="text-orange-500 text-lg font-bold">Total Amount:</div>
          <div className="text-black font-bold text-lg sm:text-xl">
            ${Totalamount(cart)}
          </div>
        </div>

        <div>
          <Button onClick={() => setShowModal(true)} title="Check out" />
        </div>
      </div>

      <CheckOutModal visible={showModal} setVisible={setShowModal} />
    </div>
  );
};

export default Cart;
