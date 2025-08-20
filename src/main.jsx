import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Component/Cart/Cart.jsx'
import MainAuth from './Component/Authentication/MainAuth.jsx'
import Setting from './Component/Setting/Setting.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Home.jsx'
import AddProduct from './Component/AddProduct/AddProduct.jsx'

import DashboardMain from './Component/Dashboard/DashboardMain.jsx'



const router = createBrowserRouter([
  
  {
    path : "/",
    element : <Home />,
    children :[
      {
    path: "/",
    element: <App/>,
  },
    {
    path: "Cart",
    element: <Cart/>,
  },
{
    path: "/Setting",
    element: <Setting/>,

  },
  {
    path: "/Productdata",
    element: <AddProduct/>,
  },
 {
  path:"/dashboard",
  element: <DashboardMain/>,
 }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
