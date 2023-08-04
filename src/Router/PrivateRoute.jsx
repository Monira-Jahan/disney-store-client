import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,spinning}=useContext(AuthContext);
    
    if(spinning){
        return <button className="btn loading">loading</button>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
    
};

export default PrivateRoute;