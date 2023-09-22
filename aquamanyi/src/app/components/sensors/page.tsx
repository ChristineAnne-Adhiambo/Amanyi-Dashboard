import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const Sensors = () => {
  const hourlyData = [
    { name: '4', pH1: 6.5, Temperature2: 23 },
    { name: '8', pH1: 6.8, Temperature2: 24 },
    { name: '12', pH1: 7.0, Temperature2: 25 },
    { name: '16', pH1: 7.2, Temperature2: 26 },
    { name: '20', pH1: 7.5, Temperature2: 27 },
    { name: '24', pH1: 7.7, Temperature2: 27 },
  ];

  const monthlyData = [
    { name: 'Jan', pH1: 6.5, Temperature2: 23 },
    { name: 'Feb', pH1: 6.8, Temperature2: 24 },
    { name: 'Mar', pH1: 7.0, Temperature2: 25 },
    { name: 'Apr', pH1: 7.2, Temperature2: 26 },
    { name: 'May', pH1: 7.5, Temperature2: 27 },
    { name: 'Jun', pH1: 7.7, Temperature2: 27 },
    { name: 'Jul', pH1: 7.7, Temperature2: 27 },
  ];

  const [activeButton, setActiveButton] = useState<'perHour' | 'perMonth'>('perHour');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(hourlyData); 


  const sensorInfoData = [
    { location: 'Sensor A', date: '2023-09-22', time: '12:00 PM', pH: 7.2 },
    { location: 'Sensor B', date: '2023-09-22', time: '12:00 PM', pH: 7.0 },
  ];

  const handleButtonClick = (buttonType: 'perHour' | 'perMonth') => {
    setActiveButton(buttonType);
    if (buttonType === 'perHour') {
      setFilteredData(hourlyData);
    } else {
      setFilteredData(monthlyData);
    }
  };

  const handleSearchClick = () => {
    const newData = filteredData.filter(item => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.pH1.toString().includes(searchQuery) ||
        item.Temperature2.toString().includes(searchQuery);
    });

    setFilteredData(newData);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-left ">
      <p className="text-2xl mb-9 ml-24 font-regular text-[#422503]">Summary</p>


        <div className="ml-60 space-x-2 gap-3 mb-8">
          <button
            className="px-4 py-2 bg-blue-700 text-white rounded-md"
            onClick={() => handleButtonClick('perHour')}
          >
            pH Section <br/>
            (6-8)
          </button>
          <button
            className="px-4 py-2 bg-blue-400 text-white rounded-md"
            onClick={() => handleButtonClick('perMonth')}
          >
            Temperature <br/>
            (Below 25)
          </button>
          <button
            className="px-4 py-2 bg-blue-400 text-white rounded-md"
            onClick={() => handleButtonClick('perMonth')} 
          >
           Analysis <br/> Data 
          </button>
        </div>

      <div className="bg-white-200 p-4 font-semibold rounded-lg shadow-lg mr-20 ml-20">
       
        <LineChart className=" line-chart mt-[-40px]" width={1000} height={650} data={filteredData}>
          <XAxis dataKey="name">
            {activeButton === 'perHour' ? (
              <Label value="Hours" position="insideBottom" dy={7} />
            ) : (
              <Label value="Months" position="insideBottom" dy={7} />
            )}
          </XAxis>
          <YAxis>
            <Label value="pH / Temperature" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pH1" stroke="#38D0F5" name="" />
          <Line type="monotone" dataKey="Temperature2" stroke="#082E58" name="" />
        </LineChart>


<div className="display-flex bg-blue-700 p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex gap-20 items-center ml-20">
    <p className="text-sm font-semibold">Sensor Location</p>
    <p className="text-sm font-semibold">Date</p>
    <p className="text-sm font-semibold">Time (hrs)</p>
    <p className="text-sm font-semibold">Analysis (pH)</p>
    <p className="text-sm font-semibold">Status Report</p>
  </div>
</div>


<div className="display-flex bg-gray-300 p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex gap-20 items-center ml-20">
    <p className="text-xs font-semibold">Sensor Location</p>
    <p className="text-xs font-semibold">Date</p>
    <p className="text-xs font-semibold">Time (hrs)</p>
    <p className="text-xs font-semibold">Analysis (pH)</p>
    <p className="text-xs font-semibold">Status Report</p>
  </div>
</div>


<div className="display-flex bg-gray-300 p-4 flex justify-between items-center mt-4 ml-20">
  <div className="flex items-center gap-20 ml-20">
    <p className="text-xs font-semibold">Sensor Location</p>
    <p className="text-xs font-semibold">Date</p>
    <p className="text-xs font-semibold">Time (hrs)</p>
    <p className="text-xs font-semibold">Analysis (pH)</p>
    <p className="text-xs font-semibold">Status Report</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default Sensors;

