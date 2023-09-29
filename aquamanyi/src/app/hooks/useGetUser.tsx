import { getUser } from "../utilities/utils";
import { useEffect,useState } from "react";
interface UserData{
    time_stamp:string;
    flow_rate:number;
    id:number;
    device:number
}
const useGetUser = () => {
  const [user, setUser] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log('totalUsers:', user);
  }, [user]);
  return { user, loading };
};
export default useGetUser;







