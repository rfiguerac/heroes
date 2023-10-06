import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "./ui/components/Navbar"




export const HeroesApp = () => {
  return (
    <>
        <ResponsiveAppBar />
        <Outlet />
    </>
  )
}

