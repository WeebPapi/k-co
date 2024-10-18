import React from "react"
import DrawerAppBar from "../components/sections/DrawerAppBar"
import { Outlet } from "react-router-dom"
import Footer from "../components/sections/Footer"

const MainLayout: React.FC = () => {
  return (
    <>
      <DrawerAppBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
