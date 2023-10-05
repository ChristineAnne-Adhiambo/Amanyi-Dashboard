import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });


interface RootLayoutProps {
  showSidebar: boolean;
  children: React.ReactNode;
}

export default function RootLayout({
  children,
  showSidebar
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className + ' flex'}>
        <div className="flex">
        </div>
        {showSidebar && <Sidebar/>}
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
