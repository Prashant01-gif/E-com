import React,{useEffect,useState} from 'react'
import MainAuth from './Component/Authentication/MainAuth'
import { Outlet } from 'react-router'
import ProductDataApi from './Component/Api/productdata.api'
const Home = () => {
    const token = localStorage.getItem('token')
    const [maindata,setMainData]=useState([])
  useEffect(() => {
    ProductDataApi(setMainData)
  }, [token]);
  return (
    <>
        {token ? <Outlet context={maindata}/> : <MainAuth />}
    </>
  )
}

export default Home