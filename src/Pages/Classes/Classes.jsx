import { Helmet } from "react-helmet";
import AllClassesSection from "./AllClassesSection/AllClassesSection";
import GymSchedule from "./GymSchedule/GymSchedule";



const Classes = () => {
    return (
        <div>
     <Helmet>
        <title>FitFF|Classes</title>
     </Helmet> 
           <GymSchedule></GymSchedule>
           <AllClassesSection></AllClassesSection>
        </div>
    );
};

export default Classes;