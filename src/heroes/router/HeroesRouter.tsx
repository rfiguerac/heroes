import { createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../../HeroesApp";
import { HeroesPage } from "../../heroes/pages/HeroesPage";
import { MarvelPages } from "../../heroes/pages/MarvelPages";
import { DcPages } from "../../heroes/pages/DcPages";

export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
       // errorElement: <ErrorPage />,
        children: [
            {
                path: "/marvel",
                element: <MarvelPages />,
            },
            {
                path: "/dc",
                element: <DcPages />,
            },
            {
                path: "/heroes",
                element: <HeroesPage />,
            }
        ]
    }
]);