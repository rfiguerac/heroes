import { Navigate, createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../auth/pages/AuthPage";
import { MarvelPages } from "../heroes/pages/MarvelPages";
import { HeroesRouter } from "../auth/router/HeroesRouter";
import { DcPages } from "../heroes/pages/DcPages";
import { HeroesPage } from "../heroes/pages/HeroesPage";
import { SearchPage } from "../heroes/pages/SearchPage";


export const getRoutes = () => createBrowserRouter([
    {
        path: "/login",
        element: <AuthPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path:'/',
        element: <HeroesRouter/>,
        children: [
            {
                path: "/marvel",
                element: <MarvelPages/>,
            },
            {
                path: "/dc",
                element: <DcPages/>,
            },
            {
                path: "/search",
                element: <SearchPage/>,
            },
            {
                path: "/heroes/:id",
                element: <HeroesPage/>,
            },
            {
                path: "/heroes",
                element: <HeroesPage/>,
            },
        ]
    }  
        
    
]);