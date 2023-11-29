import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useTrainer = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    
    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        enabled : !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/trainer/${user.email}`);
            console.log(res.data);
            return res.data?.trainer;
        }
    })
    return [isTrainer, isTrainerLoading]
};

export default useTrainer;