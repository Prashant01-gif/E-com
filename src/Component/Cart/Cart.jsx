import React, { useState } from "react";
import Navbar from "../Navbar";
import Cartcart from "./Cartcart";
import Totalamount from "../CustomFunction/Totalamount";
import Button from "../Navbar/Btn";
import CheckOutModal from "./CheckOutModal";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("cart"));
    return stored || [];
  });

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Navbar />

      <div>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <Cartcart item={item} setCart={setCart} key={index} />
          ))
        ) : (
          <div className="text-center text-gray-600 mt-10 text-lg">
            Your cart is empty.
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="flex flex-col sm:flex-row mb-5 justify-center items-center gap-4 mt-4">
          <div className="flex gap-2 text-lg items-center">
            <div className="text-orange-500 text-lg font-bold">Total Amount:</div>
            <div className="text-black font-bold text-lg sm:text-xl">
              ${Totalamount(cart)}
            </div>
          </div>

          <div>
            <Button
              onClick={() => setVisible(true)}
              title="Check out"
            />
          </div>
        </div>
      )}

      <CheckOutModal
        visible={visible}
        setVisible={setVisible}
        cart={cart} 
      />
    </div>
  );
};

export default Cart;
