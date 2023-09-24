'use client'
import React, { useState } from 'react';
import { FaTint, FaThermometerThreeQuarters, FaDatabase } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const HomePage: React.FC = () => {
  const dailyTemperatureData = [
    { name: 'Mon', Temperature: 18 },
    { name: 'Tue', Temperature: 23 },
    { name: 'Wed', Temperature: 20 },
    { name: 'Thu', Temperature: 30 },
    { name: 'Fri', Temperature: 26 },
    { name: 'Sat', Temperature: 20 },
    { name: 'Sun', Temperature: 29 },
  ];

  const weeklyPhData = [
    { name: 'Acidic', value: 7.0, fill: '#38D0F5' }, // Specify fill color for each segment
    { name: 'Neutral', value: 13, fill: '#F1DB18' },
    { name: 'Alkaline', value: 9, fill: '#082E58' },
  ];

  const barColors = ['#082E58', '#38D0F5']; 
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredTemperatureData = dailyTemperatureData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPhData = weeklyPhData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
       <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-64 h-10 px-2 mt-10 text-gray-800 border border-gray-400 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    <div className="flex justify-center ms-10 mr-20 mt-10 mb-40 gap-x-28">
        <div className="border-4  p-4 max-w-lg rounded-lg mr-10 mt-20 text-black-400 bg-sky-500/100 ">
          <div className="text-center flex space-x-4 text-white">
            <FaTint size={62} />
            <p className="text-xl font-bold">pH Data Section <br />(6-8) <br /><hr /></p>
          </div>
        </div>
        <div className="border-4  p-4 max-w-lg rounded-lg text-Slate-50 mt-20  bg-blue-950  ">
          <div className="text-center flex space-x-4 text-white rounded-lg ">
            <FaThermometerThreeQuarters size={62} />
            <p className="text-xl font-bold text-white">Temperature Section<br/> (Below 35)<br /><hr/> </p>
          </div>
        </div>
        <div className="border-4  p-8 max-w-lg rounded-lg ml-10 text-white-400 mt-20 bg-sky-500/100 ">
          <div className="text-center flex space-x-4 text-white ">
            <FaDatabase size={62} />
            <p className="text-xl font-bold">Analysed Data <br />Date ,Time <hr /></p>
          </div>
        </div>
      </div>
    <div className="ml-[200px] - mb-9  flex items-left font-family-Poppins justify-center">
      <p className="text-4xl -mt-2 mb-9 ml-24 text-base font-medium text-[#422503]" >Weekly Data</p>
      <div className="flex justify-center  gap-x-10"> {/* Center horizontally */}
        <div className="bg-white-200 p-4 font-semibold rounded-lg shadow-lg mr-56">
          <h2 className="text-xl font-bold mb-2">Temperature</h2>
          <BarChart width={400} height={400} data={dailyTemperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Temperature">
              {dailyTemperatureData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      <div className="flex  mt-5  gap-x-60 ml-24" style={{marginRight:"20%"}} > {/* Add margin-top and center vertically */}
        <div className="bg-white-200 p-4 font-semibold rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">pH Measurement</h2>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={weeklyPhData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {weeklyPhData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
      
    </div>
    <div className="ml-20">
  <div className="mr-200">
  <div className="mr-[50px]">
  <div className="display-flex text-white bg-blue-950 max-w-[100%] p-4 flex justify-between items-center mt-7 ml-20">
  <div className="flex gap-40 items-center ml-20  ">
  <p className="text-sm font-semibold">Sensor Location</p>
  <p className="text-sm font-semibold">Date</p>
  <p className="text-sm font-semibold">Time (hrs)</p>
  <p className="text-sm font-semibold">Analysis (pH)</p>
  <p className="text-sm font-semibold">Status Report</p>
  </div>
  </div>
<div className="display-flex bg-gray-300 max-w-[100%] p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex gap-40 items-center ml-20">
    <p className="text-xs font-semibold">Naivasha West</p>
    <p className="text-xs font-semibold">2/10/2023</p>
    <p className="text-xs font-semibold">4:23 PM</p>
    <p className="text-xs font-semibold">6:8</p>
    <p className="text-xs font-semibold">Normal</p>
  </div>
</div>
<div className="display-flex bg-gray-300  max-w-[100%] p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex items-center gap-40 ml-20">
    <p className="text-xs font-semibold">Naivasha North</p>
    <p className="text-xs font-semibold">4/10/2023</p>
    <p className="text-xs font-semibold">5:10am</p>
    <p className="text-xs font-semibold">7:0</p>
    <p className="text-xs font-semibold">Normal</p>
  </div>
  </div>
  <div className="display-flex bg-gray-300  max-w-[100%] p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex items-center gap-40 ml-20">
    <p className="text-xs font-semibold">Naivasha North</p>
    <p className="text-xs font-semibold">4/10/2023</p>
    <p className="text-xs font-semibold">5:10am</p>
    <p className="text-xs font-semibold">7:0</p>
    <p className="text-xs font-semibold">Normal</p>
  </div>
  </div>
  <div className="display-flex bg-gray-300  max-w-[100%] p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex items-center gap-40 ml-20">
    <p className="text-xs font-semibold">Naivasha North</p>
    <p className="text-xs font-semibold">4/10/2023</p>
    <p className="text-xs font-semibold">5:10am</p>
    <p className="text-xs font-semibold">7:0</p>
    <p className="text-xs font-semibold">Normal</p>
  </div>
  </div>
  <div className="display-flex bg-gray-300  max-w-[100%] p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex items-center gap-40 ml-20">
    <p className="text-xs font-semibold">Naivasha North</p>
    <p className="text-xs font-semibold">4/10/2023</p>
    <p className="text-xs font-semibold">5:10am</p>
    <p className="text-xs font-semibold">7:0</p>
    <p className="text-xs font-semibold">Normal</p>
  </div>
  </div>
  <div className="display-flex bg-gray-300  max-w-[100%] p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex items-center gap-40 ml-20">
    <p className="text-xs font-semibold">Naivasha North</p>
    <p className="text-xs font-semibold">4/10/2023</p>
    <p className="text-xs font-semibold">5:10am</p>
    <p className="text-xs font-semibold">7:0</p>
    <p className="text-xs font-semibold">Normal</p>
  </div>
  </div>
  <div className="display-flex bg-gray-300  max-w-[100%] p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex items-center gap-40 ml-20">
    <p className="text-xs font-semibold">Naivasha North</p>
    <p className="text-xs font-semibold">4/10/2023</p>
    <p className="text-xs font-semibold">5:10am</p>
    <p className="text-xs font-semibold">7:0</p>
    <p className="text-xs font-semibold">Normal</p>
  </div>
  </div>
  <div className="display-flex bg-gray-300  max-w-[100%] p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex items-center gap-40 ml-20">
    <p className="text-xs font-semibold">Naivasha West</p>
    <p className="text-xs font-semibold">4/10/2023</p>
    <p className="text-xs font-semibold">5:10am</p>
    <p className="text-xs font-semibold">7:0</p>
    <p className="text-xs font-semibold">Normal</p>
  </div>
  </div>
</div>
</div>
</div>
    </div>
  );
};

export default HomePage;


