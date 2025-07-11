import React from 'react'
import Navbar from './Component/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import Category from './Category'
import Items from './Items'
import Footer from './Footer'






function App() {

  return (

    <div>
      <Navbar/>
      <Home/>
      <Category/>
      <Items/>
      <Footer/>
      
       
       
   </div>

  )
}

export default App