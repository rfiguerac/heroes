import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "../../ui/components/Navbar"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Typography } from "@mui/material";



export const HeroesRouter = () => {
  const { state } = useContext(AuthContext);
  return (
    <>
      <ResponsiveAppBar />
      {
        (state.name)
          ? (<Container maxWidth="xl">
            <Typography variant="h3"> Bienvenido Sr.{state.name}</Typography>
          </Container>)
          : null
      }

      <Outlet />

    </>
  )
}
