import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";




const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;