'use client'
import React from 'react'
import HomePage from './components/HomePage/pages';
import MyForm from './components/Profile/pages';


export default function Home() {
  return (
    <main >
      <div >
        <HomePage/>
        <MyForm/>
     
      </div>
    </main>
  )
}
