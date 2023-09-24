'use client'
import React from 'react';
import { FaPen, FaAddressBook } from 'react-icons/fa';

const MyForm = () => {
  return (
    <div className="flex flex-col space-y-4 ml-72 w-96 mt-32">
        <div className=''>
        <p className='font-bold text-1xl ml-24'>Profile</p>
        <div>
        <button className='py-2 px-6 ml-36 bg-blue-900 text-white rounded'>Log Out</button>
      </div>
        {/* <FaAddressBook/> */}
        <FaAddressBook className="w-60 text-blue-900" />
      <label htmlFor="name" className="text-gray-800">Name:</label>
      <div className='relative'>
      <input
        type="text"
        id="name"
        name="name"
        className="border border-sky-400/100 rounded px-3 py-2 border-2"
      />
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ml-60'>
        <FaPen/>
      </div>
      </div>
      <label htmlFor="username" className="text-gray-800">Username:</label>
      <div className='relative'>
      <input
        type="text"
        id="username"
        name="username"
        className="border border-sky-400/100 rounded px-3 py-2 border-2"
      />
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ml-60'>
        <FaPen/>
      </div>
      </div>
      <label htmlFor="email" className="text-gray-800">Email:</label>
      <div className='relative'>
      <input
        type="email"
        id="email"
        name="email"
        className="border border-sky-400/100 rounded px-3 py-2 border-2"
      />
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ml-60'>
        <FaPen/>
      </div>
      </div>
      <label htmlFor="phone" className="text-gray-800">Phone:</label>
      <div className='relative'>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="border border-sky-400/100 rounded px-3 py-2 border-2"
      />
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ml-60'>
        <FaPen/>
      </div>
      </div>
      <div>
        <button className='py-2 px-6 ml-36 bg-blue-900 text-white rounded'>Save</button>
      </div>
      </div>
    </div>
  );
};
export default MyForm;