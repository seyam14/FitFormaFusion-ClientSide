import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useTrainer = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    
    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/trainer/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isTrainer, isTrainerLoading]
};

export default useTrainer;