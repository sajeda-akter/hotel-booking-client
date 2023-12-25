import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="bg-slate-100">
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Main;