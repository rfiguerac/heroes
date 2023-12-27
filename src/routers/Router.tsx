import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../auth/pages/AuthPage";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { HeroesRoutes, childHeroesRoutes } from "../heroes/router/HeroesRouter";


export const getRoutes = createBrowserRouter([
    {
        path: "/login",
        element: <PublicRouter><AuthPage /></PublicRouter> ,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <PrivateRouter> <HeroesRoutes /> </PrivateRouter>,
        children: childHeroesRoutes,        
      },
]);