import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="">
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Main;