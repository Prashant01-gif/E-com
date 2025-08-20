import React from 'react'
import Navbar from './Component/Navbar'
import { createBrowserRouter, RouterProvider, useNavigate, useOutletContext } from 'react-router-dom'
import Home from './Component/Home'
import Category from './Category'
import Items from './Items'
import Footer from './Footer'
import { useState,useEffect } from 'react'
import ProductDataApi from './Component/Api/productdata.api'






function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if(!token){
    
  }

  const maindata = useOutletContext();
   const [productData, setProductData] = useState(maindata);
   useEffect(() =>{
    setProductData
   })
  
  return (

    <div>
      <Navbar/>
      <Home/>
      <Category maindata={maindata} setProductData={setProductData}/>
      <Items productData={productData}/>
      <Footer/>
  
     
      
       
       
   </div>

  )
}

export default App