'use client';
import React, { useEffect, useState } from 'react';
import cookie from 'cookiejs';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userLoggedIn = Boolean(cookie.get('sessionToken'));
    setLoading(false)


    if (!userLoggedIn) {
      router.push('/signin');
    }
    else {
      setIsUserLoggedIn(userLoggedIn);
      router.push('/homePage')
    }
  }, []);
  if (loading) return <div className="h-screen flex items-center justify-center text-4xl">
    Loading,please wait... &#128522;
  </div>

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center text-4xl custom-primary-text">
        {isUserLoggedIn ?
          'Welcome back! 👋' :
          'Redirecting you to Sign In page, just a moment... ➡️'
        }
        
      </div>
    </div>
  );
};
export default Home;








