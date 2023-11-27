import { IoMdFitness } from 'react-icons/io';
import { FaEnvelope, FaHome, FaUsers } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { SiGoogleclassroom, SiTrainerroad, SiWheniwork } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    // const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-purple-400">
                <ul className="menu p-4">
                    {/* {
                        isAdmin ? <> */}
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
                        {/* </>
                            : */}
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
                    {/* } */}
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
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