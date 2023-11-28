import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Component/Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if( isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if ( isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};


export default AdminRoute;