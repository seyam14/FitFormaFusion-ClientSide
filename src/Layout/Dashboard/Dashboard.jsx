import { IoMdFitness } from 'react-icons/io';
import { FaEnvelope, FaHome, FaUsers } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { SiGoogleclassroom, SiTrainerroad, SiWheniwork } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from '../../Component/Hooks/useAdmin';
import useTrainer from '../../Component/Hooks/useTrainer';
import { Helmet } from 'react-helmet';



const Dashboard = () => {

    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    const [isTrainer] = useTrainer();
    console.log(isTrainer);
    // const isAdmin = true;

    return (
        <div className="flex">
     <Helmet>
        <title>FitFF|Dashboard</title>
     </Helmet> 
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-purple-400">
                <ul className="menu p-4">
                    {
                        isAdmin && 
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/subscribers">
                                <FaEnvelope />
                                    Subscribers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/trainers">
                                <IoMdFitness size={20} color="#333" />
                                    Trainers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/appliedTrainer">
                                <SiTrainerroad />
                                Applied Trainer</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/balance">
                                <FaSackDollar />         
                                Balance</NavLink>
                            </li>
                        </>
                    }
                    {
                        isTrainer && 
                        <>
                        <li>
                       <NavLink to="/dashboard/trainerHome">
                           <FaHome></FaHome>
                           Trainer Home</NavLink>
                   </li>
                        <li>
                       <NavLink to="/dashboard/slots">
                           <FaHome></FaHome>
                           Manage Slots</NavLink>
                   </li>
                        <li>
                       <NavLink to="/dashboard/member">
                           <FaHome></FaHome>
                           Manage member</NavLink>
                   </li>
                        <li>
                       <NavLink to="/dashboard/newForum">
                           <FaHome></FaHome>
                           Add new Forum</NavLink>
                   </li>
                        <li>
                       <NavLink to="/dashboard/newClass">
                           <FaHome></FaHome>
                           Add new Class</NavLink>
                   </li>

                  </>

                    }

                    {

                        isAdmin || isTrainer === false &&  
                        <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/activity">
                                    <SiWheniwork />
                                    Activity Log</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/settings">
                                    <RiUserSettingsFill />
                                    Profile Settings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/classes">
                                    <SiGoogleclassroom />
                                    Classes</NavLink>
                                </li>
                        </>
                    }
                    
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaHome></FaHome>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};


export default Dashboard;