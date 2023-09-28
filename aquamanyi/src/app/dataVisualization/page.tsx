'use client'
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { FaTint, FaThermometerThreeQuarters } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const DataVisualization: React.FC = () => {
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeButton, setActiveButton] = useState<'day' | 'week' | 'month'>('day');
  const [tableData, setTableData] = useState<{ time: string; pH: number; temperature: number }[]>([]);

  const handleButtonClick = (buttonType: 'day' | 'week' | 'month') => {
    setActiveButton(buttonType);
    updateChartData(buttonType);
  };

  const updateChartData = (type: 'day' | 'week' | 'month') => {

    let labels: string[] = [];
    let phData: number[] = [];
    let temperatureData: number[] = [];

    if (type === 'day') {
      labels = ['1', '2', '3', '4', '5', '6', '7'];
      phData = [6, 7, 6.5, 7.2, 6.8, 7.1, 6.7];
      temperatureData = [18, 20, 21, 22, 20, 19, 20];
    } else if (type === 'week') {
      labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      phData = [6.2, 6.9, 7.0, 6.8, 7.1, 6.7, 6.5];
      temperatureData = [18.5, 20.3, 21.2, 22.1, 20.8, 19.7, 20.5];
    } else if (type === 'month') {
      labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      phData = [6.7, 6.8, 7.1, 6.9];
      temperatureData = [19.8, 20.5, 21.2, 20.7];
    }

    const updatedChartData = {
      labels,
      datasets: [
        {
          label: 'pH',
          data: phData,
          backgroundColor: '#87CEEB',
          borderColor: '#87CEEB',
          borderWidth: 1,
        },
        {
          label: 'Temperature (°C)',
          data: temperatureData,
          backgroundColor: '#082E58',
          borderColor: '#0000FF',
          borderWidth: 1,
        },
      ],
    };

 
    const updatedTableData = labels.map((label, index) => ({
      time: label,
      pH: phData[index],
      temperature: temperatureData[index],
    }));
    setTableData(updatedTableData);

    const chartCanvas = chartCanvasRef.current;
    if (chartCanvas) {
      const chartCtx = chartCanvas.getContext('2d');
      if (chartCtx) {
        const chart = new Chart(chartCtx, {
          type: 'bar',
          data: updatedChartData,
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Time',
                },
              },
            },
          },
        });
      }
    }
  };

  useEffect(() => {
  
    updateChartData('day');
  }, []);

  return (
    <div>
      <div className="flex justify-center space-x-10 mt-10 mb-10">
       
        <div className="border-4 p-4 max-w-lg rounded-lg text-black-400 bg-sky-500/100 flex items-center">
          <FaTint size={62} className="mx-auto" style={{ color: 'white' }} />
          <button
            className={`text-center space-y-2 text-white ${activeButton === 'day' ? 'font-bold' : ''}`}
            onClick={() => handleButtonClick('day')}
          >
            <p className="">pH Section <br />(Day)</p>
            <hr className="border-white" />
          </button>
        </div>
        <div className="border-4 p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center">
          <FaThermometerThreeQuarters size={62} className="mx-auto" style={{ color: 'white' }} />
          <button
            className={`text-center space-y-2 text-white ${activeButton === 'week' ? 'font-bold' : ''}`}
            onClick={() => handleButtonClick('week')}
          >
            <p className="">Temperature <br /> (Week)</p>
            <hr className="border-white" />
          </button>
        </div>
        <div className="border-4 p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center">
          <FaThermometerThreeQuarters size={62} className="mx-auto" style={{ color: 'white' }} />
          <button
            className={`text-center space-y-2 text-white ${activeButton === 'month' ? 'font-bold' : ''}`}
            onClick={() => handleButtonClick('month')}
          >
            <p className="">Temperature & pH<br /> (Month)</p>
            <hr className="border-white" />
          </button>
        </div>
      </div>
      <div className="flex justify-center" style={{ maxWidth: '50%', margin: '0 auto' }}>
  
        <canvas ref={chartCanvasRef} id="chartCanvas" width="150" height="50" />
      </div>
     
      <div className="mx-auto w-[40%] mt-7 space-y-2">
  <div className="display-flex text-white bg-blue-950 p-4  flex justify-between items-center mt-2 gap-10">
    <div className="flex gap-20 items-center text-center">
      <p className="text-xs font-semibold">Time</p>
      <p className="text-xs font-semibold">pH</p>
      <p className="text-xs font-semibold">Temperature (°C)</p>
    </div>
  </div>
  {tableData.map((item, index) => (
    <div className="text-black bg-gray-300 p-2 flex justify-between items-center mt-2" key={index}>
      <div className="flex gap-20 items-center text-center">
        <p className="text-xs font-semibold">{item.time}</p>
        <p className="text-xs font-semibold">{item.pH}</p>
        <p className="text-xs font-semibold">{item.temperature}</p>
      </div>
    </div>
  ))}
</div>
 <Sidebar />
    </div>
  );
};

export default DataVisualization;
