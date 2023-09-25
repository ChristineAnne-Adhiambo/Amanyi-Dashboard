'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { BiHome } from 'react-icons/bi';

import { FaChartBar, FaCircleNotch, FaRegClone, FaCog, FaPen, FaTemperatureHigh, FaBell, FaMapMarkerAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('overflow-x-hidden', isOpen);
  };

  return (
    <div className="flex">
      <div className={`fixed top-0 left-0 h-screen w-16 bg-blue-950 ${isOpen ? 'w-64' : ''}`}>
        <div className="flex justify-between items-center h-16">
          <div className="ml-2"></div>
          <button className="text-white mr-2" onClick={toggleMenu}>
            <div className={`h-1 w-6 bg-white mb-1 transition-transform transform ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
            <div className={`h-1 w-6 bg-white mb-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`h-1 w-6 bg-white transition-transform transform ${isOpen ? '-rotate-45 translate-y-0.5' : ''}`} />
          </button>
        </div>
        {isOpen && (
          <>
            <div className="w-40 mr-20 ml-7">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <hr className="border-gray-300 my-2" />
            <nav className="flex flex-col mt-4">
              <Link href="/" className="flex items-center text-white hover:bg-blue-600 px-8 py-4">
                <BiHome className="text-lg mr-2" /> Home
              </Link>
              <Link href="/about" className="flex items-center text-white hover:bg-blue-600 px-8 py-4">
                <FaChartBar className="text-lg mr-2" /> Data Visualization
              </Link>
              <Link href="/contact" className="flex items-center text-white hover:bg-blue-600 px-8 py-4">
                <FaTemperatureHigh className="text-lg mr-2" /> pH & Temperature
              </Link>
              <Link href="/" className="flex items-center text-white hover-bg-blue-600 px-8 py-4">
                <FaMapMarkerAlt className="text-lg mr-2" /> Sensor Location
              </Link>
              <Link href="/" className="flex items-center text-white hover-bg-blue-600 px-8 py-4">
                <FaBell className="text-lg mr-2" /> Alert & Notification
              </Link>
              <hr className="border-gray-300 my-2" />
              <Link href="/" className="flex items-center text-white hover-bg-blue-600 px-8 py-4">
                <FaCog className="text-lg mr-2" /> Profile Setting
              </Link>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
