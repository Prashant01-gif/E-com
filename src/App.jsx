import React from 'react'
import Navbar from './Component/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import Category from './Category'
import Items from './Items'
import Footer from './Footer'
import { useState,useEffect } from 'react'
import ProductDataApi from './Component/Api/productdata.api'





function App() {
   const [productData, setProductData] = useState([]);
  const [maindata,setMainData]=useState([])
  useEffect(() => {
    ProductDataApi(setProductData,setMainData)
  }, []);
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