import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Pages/Register/Login";
import Signup from "../components/Pages/Register/Signup";
import Rooms from "../components/Pages/Rooms/Rooms";
import MyBooking from "../components/Pages/MyBooking/MyBooking";
import DetailsPage from "../components/Pages/Rooms/DetailsPage/DetailsPage";
import PrivateRouter from "./PrivateRouter";
import Reviews from "../components/Pages/Reviews/Reviews";
import UpdateDate from "../components/Pages/MyBooking/UpdateDate/UpdateDate";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";

export const routers=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/rooms',
                element:<Rooms/>
            },
            {
                path:'/myBooking',
                element:<MyBooking/>
            },
            {
                path:'/update/:id',
                loader:({params})=>fetch(`http://localhost:5000/booking/${params.id}`),
                element:<UpdateDate/>
            },
            {
                path:'/reviews',
                loader:()=>fetch('http://localhost:5000/booking'),
                element:<Reviews/>
            },
            {
                path:'/detailpage/:id',
                loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`),
                element:<PrivateRouter><DetailsPage/></PrivateRouter>
            }
            
        ]
    }
])