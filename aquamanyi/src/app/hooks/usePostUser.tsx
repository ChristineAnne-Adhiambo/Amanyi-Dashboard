import { useState } from 'react';
import { createUser } from '../utilities/utils';
import { useRouter } from 'next/navigation';

const useRegister = () => {
  const router = useRouter()
  const [user, setUser] = useState(null); 
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
    else{
      setUser(response);
      router.push('/signin')
    }
    

  };
  return { handleRegister, loading, user, error };
};
export default useRegister;



// import { useState } from 'react';
// import { createUser } from '../utilities/utils';
// import { useRouter } from 'next/navigation';

// const useRegister = () => {
//   const router = useRouter()
  // const [user, setUser] = useState(null); 
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
  
//   const handleRegister = async (userData: UsersData) => {
//     setLoading(true)
//     setError('')
//     const response = await createUser(userData);
//     setLoading(false)
    
//     if (response.error) {
//       setError(response.error);
//     } else {
      // setUser(response);
//       console.log(response)
//       router.push('/signin')
//     }
//   };
  
//   return { handleRegister, loading, user, error };
// };

// export default useRegister;

