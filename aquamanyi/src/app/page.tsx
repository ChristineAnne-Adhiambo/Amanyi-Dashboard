

// pages/index.js or any other relevant page
'use client'
import React from 'react';
// import Notification from '../components/Notification';
// import Notification from '@/components/Notifications/page';
import Notification from '@/components/page';

const Home = () => {
  return (
    <div>
      {/* Your page content */}
      <Notification />
    </div>
  );
};

export default Home;
import SigninForm from "./signin/page"
import SignupForm from "./signup/page"
export default function Home() {
  return (
    <main>
      <SigninForm />
      <SignupForm />

    </main>
  )
}
