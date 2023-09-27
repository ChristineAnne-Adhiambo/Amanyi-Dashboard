import { useState } from "react";
import { FaBell } from 'react-icons/fa';
import Sidebar from "../components/Sidebar";



const Notification = () => {

  return (
    <div className="flex flex-col items-center pt-20">
     
<div className="ml-[75%]">

      <FaBell size={32} color="darkblue"/>
    </div>
      <div className="w-3/4 h-[74px] flex-shrink-0 border-2 border-blue-900 bg-opacity-51 bg-blue-900 mt-2 ml-9 flex items-center">
     
  <div className="text-white font-inter text-2xl font-semibold leading-normal p-8 ml-10">
    Alert & Notification
  </div>
</div>
<div className="flex flex-col items-start mt-14 ml-10">
  <div className="text-3xl font-normal mb-4">
    <span className="mr-4 mb-8 font-inter">Messages:</span>

    <div className="w-[594px] h-[186px] flex-shrink-0 border-2 border-gray-200 bg-opacity-51 bg-white-400 rounded-[20px] p-4 shadow-xl mt-4">
      <div className="text-black font-regular text-2xl font-inter font-regular leading-normal">
        The pH level is now at 6.0, the water is acidic and therefore polluted.
      </div>
    </div>
  </div>
</div>
<Sidebar/>
    </div>
    
  );
};

export default Notification;





