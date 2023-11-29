import { Navigate, useLocation } from "react-router-dom";
import useTrainer from "../../Component/Hooks/useTrainer";


const TrainerRoute = ({children}) => {
    const [isTrainer, isTrainering] = useTrainer();
    const location = useLocation();

    if( isTrainering){
        return <progress className="progress w-56"></progress>
    }

    if ( isTrainer) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default TrainerRoute;