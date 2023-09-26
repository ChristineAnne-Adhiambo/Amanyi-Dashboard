import { useState } from "react";
// import React, {useState} from 'react';

const Notification = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="flex flex-col items-center pt-20">
      <div className="flex justify-end items-center w-3/4 h-29">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 fill-current text-38D0F5"
          viewBox="0 0 20 20"
        >
          {/* SVG path goes here */}
        </svg>
      </div>
      <div className="w-3/4 h-74 flex-shrink-0 border-2 border-blue-900 bg-opacity-51 bg-blue-900  mt-4 ml-9">
        <div className="text-white font-inter text-2xl font-semibold leading-normal p-8">
          Alert & Notification
        </div>
      </div>

      <div className="flex flex-col items-start mt-10 ml-10">
        <div className="text-3xl font-semibold mb-4">
          <span className="mr-4 mb-8">Messages:</span>

          {/* <div className="flex justify-center mt-4">
    <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAlertClick}>
      Show Alerts
     </button>   */}
     
    
        {/* </div> */}

        <div className="w-3/4 h-40 flex-shrink-0 border-4 border-gray-200 bg-opacity-51 bg-white-400 rounded-lg p-4 shadow-md">
          <div className="text-black font-inter text-2xl font-semibold leading-normal">
            The pH level is now at 6.0, the water is acidic and therefore polluted.
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Notification;

{/* // const [showAlert, setShowAlert] = useState(false);
//   const handleAlertClick = () => { */}
{/* //     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 5000); // Automatically hide after 5 seconds
//   };
//    return (
//     <div className="flex justify-center mt-4">
//     <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAlertClick}>
//       Show Alerts
//     </button>
//     {showAlert && ( */}
//       <div
//  className="fixed top-1/2 left-1/2 transform -translate-x-1/2
// -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-1/2">
//         <p className="text-black">The pH levels have raised to 6 and the water is polluted.</p>
//       </div>



