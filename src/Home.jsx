import React from 'react'
import MainAuth from './Component/Authentication/MainAuth'
import { Outlet } from 'react-router'
const Home = () => {
    const token = localStorage.getItem('token')
  return (
    <>
        {token ? <Outlet /> : <MainAuth />}
    </>
  )
}

export default Home