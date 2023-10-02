import { getUser } from "../utilities/utils";
import { useEffect,useState } from "react";
interface UserData{
  username:string;
  email:string;
    first_name:string;
    last_name:string;
    password:string;

   
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







