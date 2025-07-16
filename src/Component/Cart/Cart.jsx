import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Cartcart from './Cartcart'



const Cart = () => {
 
  const [cart,setCart]=useState(JSON.parse(localStorage.getItem('cart')))
  
  console.log(cart)
  return (
    <div> 
        <Navbar/>
       {cart.map((item,index)=>(
        <div> <Cartcart item={item} setCart={setCart} key={index}/></div>
       ))}
 
   </div>
  )
}

export default Cart