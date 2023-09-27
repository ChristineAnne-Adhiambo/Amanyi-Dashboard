import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
title: 'Create Next App',
description: 'Generated by create next app',
}

interface RootLayoutProps {
showSidebar: boolean;
children: React.ReactNode
}
export default function RootLayout({
children,
showSidebar,
}: RootLayoutProps) {
return (
<html lang="en">
<body className={inter.className + "flex"}>
<div className='flex'>
{showSidebar && <Sidebar/>}
{/* <Sidebar/> */}
</div>
<div>
{children}
</div>
</body>
</html>
)
}
