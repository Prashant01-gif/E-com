import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Cartcart from "./Cartcart";

const Cart = () => {
  let data = localStorage.getItem ("cart ")
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  
  return (
    <div>
      <Navbar />
         {cart.map((item, index)   => (<Cartcart item={item} setCart={setCart} key={index} />))}
       </div>
  )
};

export default Cart;
