import { useState } from 'react';
import { createUser } from '../utilities/utils';
import { useRouter } from 'next/navigation';

const useRegister = () => {
  const router = useRouter()
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleRegister = async (userData: UsersData) => {
    setLoading(true)
    setError('')
    const response = await createUser(userData);
    setLoading(false)
    if (response.error) {
      setError(response.error)
      return
    }
    alert('Registered Successfully')
    router.push('/homePage')

  };
  return { handleRegister, loading, user, error };
};
export default useRegister;

