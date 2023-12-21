import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRouter = ({children}) => {
    const location=useLocation()
   
    const {user}=useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname} ></Navigate>
};

export default PrivateRouter;