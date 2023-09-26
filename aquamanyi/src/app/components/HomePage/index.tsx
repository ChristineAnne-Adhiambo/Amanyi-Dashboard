"use client";
import React, { useState } from "react";
import { FaTint, FaThermometerThreeQuarters, FaDatabase } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const HomePage = () => {
  const dailyTemperatureData = [
    { name: "Mon", Temperature: 29 },
    { name: "Tue", Temperature: 25 },
    { name: "Wed", Temperature: 23 },
    { name: "Thu", Temperature: 20 },
    { name: "Fri", Temperature: 19 },
    { name: "Sat", Temperature: 16 },
    { name: "Sun", Temperature: 10 },
  ];

  const weeklyPhData = [
    { name: "Acidic", value: 7.0, fill: "#38D0F5" },
    { name: "Neutral", value: 13, fill: "#F1DB18" },
    { name: "Alkaline", value: 9, fill: "#082E58" },
  ];

  const barColors = ["#082E58", "#38D0F5"];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeButton, setActiveButton] = useState<"monthly" | "weekly">(
    "monthly"
  );

  const handleButtonClick = (buttonType: "monthly" | "weekly") => {
    setActiveButton(buttonType);
  };

  const filteredTemperatureData = dailyTemperatureData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPhData = weeklyPhData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto  sm:[480px] md:[760px] lg:[976] xl:[144]">
      <div className="flex justify-center">
  <input
    type="text"
    placeholder="Search"
    className="w-[400px] h-[40px] px-4 mr-10 mt-10 py-2 text-gray-800 border border-gray-800 rounded-lg"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
      

<div className="flex justify-center gap-80 mt-20 space-x-20 ">
<div className="border-4 p-4 max-w-lg rounded-lg text-white bg-sky-500/100 flex items-center h-40">
  <FaTint size={120} className="text-white mx-auto" />
  <button
  className="text-white ml-4 w-200"
  onClick={() => handleButtonClick("monthly")}
>
  <p className="text-2xl">
  pH Section <br />
    (Below 0-6.99)
  </p>
  <hr className="border-white" />
</button>
  </div>

  <div className="border-4 p-4 max-w-lg rounded-lg text-white bg-blue-950 flex items-center h-40">
  <FaThermometerThreeQuarters size={120} className="text-white mx-auto" />
  <button
  className="text-white ml-4 w-200"
  onClick={() => handleButtonClick("monthly")}
>
  <p className="text-2xl">
    Temperature <br /> (Below 05-30°C)
  </p>
  <hr className="border-white" />
</button>
  </div>
</div>

<div className="ml-[100px]  mt-20 flex items-left ">
<div className="bg-white-200 p-4 font-semibold rounded-lg shadow-lg mr-40 ">
            <h2 className="text-xl font-bold mb-2 ml-10">Temperature</h2>
            <BarChart width={600} height={600} ml-38 data={dailyTemperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Temperature">
                {dailyTemperatureData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={barColors[index % barColors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </div>

        
          <div className="bg-white-200  font-semibold rounded-lg shadow-lg mt-40 ">
            <h2 className="text-xl font-bold mb-2">pH Measurement</h2>
            <PieChart width={450} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={weeklyPhData}
                cx="50%"
                cy="50%"
                outerRadius={150}
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


      <div className="ml-5 ">
       
          
            <div className="display-flex text-white bg-blue-950 max-w-[82%] p-4 flex justify-between items-center mt-7 ml-20">
                <p className="text-sm font-semibold">Sensor Location</p>
                <p className="text-sm font-semibold">Date</p>
                <p className="text-sm font-semibold">Time (hrs)</p>
                <p className="text-sm font-semibold">Analysis (pH)</p>
                <p className="text-sm font-semibold">Status Report</p>
             
            </div>
            <div className="display-flex bg-gray-300 max-w-[82%] p-4 flex justify-between items-center mt-4 ml-20">
                <p className="text-xs font-semibold">Naivasha West</p>
                <p className="text-xs font-semibold">2/10/2023</p>
                <p className="text-xs font-semibold">4:23 PM</p>
                <p className="text-xs font-semibold">6:8</p>
                <p className="text-xs font-semibold text-green-600">Normal</p>
              {/* </div> */}
            </div>
            <div className="display-flex bg-gray-300  max-w-[82%] p-4 flex justify-between items-center mt-4 ml-20">
              {/* <div className="flex items-center gap-40 ml-20"> */}
                <p className="text-xs font-semibold">Naivasha North</p>
                <p className="text-xs font-semibold">4/10/2023</p>
                <p className="text-xs font-semibold">5:10am</p>
                <p className="text-xs font-semibold">7:0</p>
                <p className="text-xs font-semibold text-green-600">Normal</p>
              {/* </div> */}
            </div>
            <div className="display-flex bg-gray-300  max-w-[82%] p-4 flex justify-between items-center mt-4 ml-20">
              {/* <div className="flex items-center gap-40 ml-20"> */}
                <p className="text-xs font-semibold">Naivasha North</p>
                <p className="text-xs font-semibold">4/10/2023</p>
                <p className="text-xs font-semibold">5:10am</p>
                <p className="text-xs font-semibold">7:0</p>
                <p className="text-xs font-semibold text-red-600">Acidity</p>
              {/* </div> */}
            </div>
            <div className="display-flex bg-gray-300  max-w-[82%] p-4 flex justify-between items-center mt-4 ml-20">
                <p className="text-xs font-semibold">Naivasha North</p>
                <p className="text-xs font-semibold">4/10/2023</p>
                <p className="text-xs font-semibold">5:10am</p>
                <p className="text-xs font-semibold">7:0</p>
                <p className="text-xs font-semibold text-red-600">Acidity</p>
             
            </div>
          </div>
    </div>
  );
};

export default HomePage;
