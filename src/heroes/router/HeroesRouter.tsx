import { Navigate, Outlet } from "react-router-dom"
import ResponsiveAppBar from "../../ui/components/Navbar"
import { HeroesPage } from "../pages/HeroesPage"
import { SearchPage } from "../pages/SearchPage"
import { DcPages } from "../pages/DcPage"
import { MarvelPages } from "../pages/MarvelPage"


export const childHeroesRoutes = [
    {
      path: "/marvel",
      element: <MarvelPages />,
    },
    {
      path: "/dc",
      element: <DcPages />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/heroes/:id",
      element: <HeroesPage/>,
    },
    {
      path: "/*",
      element: <Navigate to={"/marvel"} />,
    },
  ]


export const HeroesRoutes = () => {
return (
<>
    <ResponsiveAppBar />
    <div className="container">
        <Outlet />
    </div>
</>
)
}