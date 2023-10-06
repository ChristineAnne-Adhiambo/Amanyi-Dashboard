import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../utilities/utils';

const useLogin = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async(loginData: LoginData)=>{
    setLoading(true)
    setError('')
    const response = await loginUser(loginData);
    setLoading(false)
    if(response.error){
      setError(response.error)
      return
    }
    alert('Log in successful')
       router.push('/homePage');
   
    
  };
  return { user, handleLogin , loading, error};
};
export default useLogin;







