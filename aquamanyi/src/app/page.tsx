
'use client'
import SigninForm from "./signin/page"
import SignupForm from "./signup/page"
import RootLayout from "./layout"
import Sidebar from "./components/Sidebar"


import React from 'react';



export default function Home() {
  return (
    <main>
    <RootLayout showSidebar={false}>
     <SignupForm/>

    
    </RootLayout>
    <RootLayout showSidebar={false}>
     <SignupForm/>
    </RootLayout>
    </main>
  )
}













