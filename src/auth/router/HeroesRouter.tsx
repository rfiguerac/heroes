import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "../../ui/components/Navbar"



export const HeroesRouter = () => {
  return (
    <>
        <ResponsiveAppBar/>

            <Outlet/>
        
        </>
  )
}
