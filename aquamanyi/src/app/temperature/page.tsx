'use client'
import React, { useState } from "react";
import { FaTint, FaThermometerThreeQuarters, FaDatabase } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import Link from 'next/link'

const Temperature = () => {
  const tempData = [
    { name: '2.00', pH: 5.0, Temperature: 12 },
    { name: '4.00', pH: 4, Temperature: 23 },
    { name: '8.00', pH: 5.0, Temperature: 24 },
    { name: '12.00', pH: 7.1, Temperature: 35 },
    { name: '16.00', pH: 8.0, Temperature: 26 },
    { name: '20.00', pH: 6, Temperature: 37 },
  ];
  const pHData = [
    { name: 'Mon', pH: 4.0, Temperature: 22 },
    { name: 'Tue', pH: 6.5, Temperature: 33 },
    { name: 'Wed', pH: 5, Temperature: 24 },
    { name: 'Thu', pH: 5, Temperature: 26 },
    { name: 'Fri', pH: 7.99, Temperature: 20 },
    { name: 'Sat', pH: 5, Temperature: 27 },
    { name: 'Sun', pH: 6.5, Temperature: 30 },
  ];
  const [activeButton, setActiveButton] = useState<'monthly' | 'weekly'>('monthly');
  const chartData = activeButton === 'monthly' ? tempData : pHData;
  const handleButtonClick = (buttonType: 'monthly' | 'weekly') => {
    setActiveButton(buttonType);
  };  
  return (  
  <div className="mx-auto  flex flex-col items-left font-family-Poppins mb-20">
  
<div className="flex justify-center space-x-10 mt-5 gap-20 ml-10">
<div className="border-10 p-4 max-w-lg rounded-lg text-black-400 bg-sky-500/100 flex items-center">
  <FaTint size={42} className="mx-auto" style={{ color: 'white' }} />
  <Link href="/pH">
  <button
    className="text-center space-y-2 text-white w-[150px] h-130"
     
    onClick={() => handleButtonClick('monthly')}
  >
    <p className="">pH Section <br />(Below 0-6.99)</p>
    <hr className="border-white" />
  </button>
  </Link>
</div>

<div className=" p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center ml-20">
    <FaThermometerThreeQuarters size={52} className="mx-auto" style={{ color: 'white' }} />
   <Link href="/graphs">
    <button
    className="text-center space-y-2 text-white w-[150px] h-130"
    
    onClick={() => handleButtonClick('monthly')}
  >
    <p className="">Temperature <br />(Below 05-30C)</p>
    <hr className="border-white" />
  </button>
  </Link>
  </div>
</div>
<p style={{marginLeft:'48%', marginTop:'3%'}}>Temperature Readings</p>

      <div className="ml-[10%]  flex flex-col items-left font-family-Poppins mr-20 ">
      <p className="text-3xl -mt-2 mb-9 ml-24 text-base font-medium text-[#422503]"></p>
      <div className="bg-white-200 p-4 font-semibold rounded-lg ">
       
        <LineChart className="mb-[20px] ml-[20%]" width={930} height={450} data={chartData} >
          <XAxis dataKey="name">
            {activeButton === 'monthly' ? (
              <Label value="Time(hrs)" position="insideBottom" dy={7} />
            ) : (
              <Label value="Days" position="insideBottom" className='font-medium' dy={7} />
            )}
          </XAxis>
          <YAxis >
            <Label value="pH Values" angle={-90} position="insideLeft"  />
          </YAxis>
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Temperature" stroke="#422503" className="mt-10" />
        </LineChart>
      </div>
      </div> 
      


<div className="mx-auto space-y-4 ml-30">
<div className="display-flex text-white bg-blue-950 w-[90%] p-4 flex justify-between items-center mt-7 h-10 ml-40">
    <div className="flex gap-20 items-center ml-10">
      <p className="text-sm font-semibold">Sensor Location</p>
      <p className="text-sm font-semibold">Date</p>
      <p className="text-sm font-semibold">Time (hrs)</p>
      <p className="text-sm font-semibold">Analysis (pH)</p>
      <p className="text-sm font-semibold">Status Report</p>
    </div>
  </div>

  <div className="display-flex text-black bg-gray-300 w-[90%] p-4 flex justify-between items-center ml-40">
    <div className="flex gap-20 items-center ml-10">
      <p className="text-xs font-semibold">Naivasha West</p>
      <p className="text-xs font-semibold">2/10/2023</p>
      <p className="text-xs font-semibold">4:23 PM</p>
      <p className="text-xs font-semibold">6:8</p>
      <p className="text-xs font-semibold">Normal</p>
    </div>
  </div>

  <div className="display-flex text-black bg-gray-300 w-[90%] p-4 flex justify-between items-center mt-10 ml-40">
    <div className="flex gap-20 items-center">
      <p className="text-xs font-semibold">Naivasha North</p>
      <p className="text-xs font-semibold">4/10/2023</p>
      <p className="text-xs font-semibold">5:10am</p>
      <p className="text-xs font-semibold">7:00am</p>
      <p className="text-xs font-semibold">Normal</p>
    </div>
  </div>
</div>
</div>
  );
};
export default Temperature;


