import {  RouterProvider } from "react-router-dom"
import { AuthProvider } from "./auth/context/AuthProvider"
import { getRoutes } from "./routers/Router"





export const HeroesApp = () => {
  return (
    <AuthProvider>
    <RouterProvider router={getRoutes} />
  </AuthProvider>
  )
}

