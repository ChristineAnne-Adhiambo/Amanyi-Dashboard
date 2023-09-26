import React from 'react';

const Notification = () => {
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
          <span className="mr-4">Messages:</span>
        </div>

        <div className="w-3/4 h-40 flex-shrink-0 border-4 border-gray-200 bg-opacity-51 bg-white-400 rounded-lg p-4 shadow-md">
          <div className="text-black font-inter text-2xl font-semibold leading-normal">
            The pH level is now at 6.0, the water is acidic and therefore polluted.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;



