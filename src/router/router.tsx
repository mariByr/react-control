import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {DetailsPage} from "../pages/DetailsPage.tsx";

export const routes=createBrowserRouter([
    {path:'/',element:<App/>,children:[
        {index:true,element: <MoviesPage/>},
    {path:'/movies/:id',element:<DetailsPage/>}]}
])
