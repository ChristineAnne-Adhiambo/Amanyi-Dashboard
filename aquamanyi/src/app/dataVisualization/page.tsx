'use client'
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { FaTint, FaThermometerThreeQuarters } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import useGetTemp from '../hooks/useGetTemp';

const DataVisualization: React.FC = () => {
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeButton, setActiveButton] = useState<'day' | 'week' | 'month'>('day');
  const [tableData, setTableData] = useState<{ time: string; pH: number; temperature: number }[]>([]);
  const [phDataSubset, setPhDataSubset] = useState<{ x: string; y: number }[]>([]);

  const { temperatureData, phData } = useGetTemp();

  const handleButtonClick = (buttonType: 'day' | 'week' | 'month') => {
    setActiveButton(buttonType);
    updateChartData(buttonType);
  };

  const updateChartData = (type: 'day' | 'week' | 'month') => {
    let labels: string[] = [];
    let phDataValues: number[] = [];
    let temperatureDataValues: number[] = [];

    if (type === 'day') {
      labels = temperatureData.map((data, index) => data.x);
      phDataValues = phData.map(data => data.y);
      temperatureDataValues = temperatureData.map(data => data.y);
    } else if (type === 'week') {
      labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      phDataValues = phData.map(data => data.y);
      temperatureDataValues = temperatureData.map(data => data.y);
    } else if (type === 'month') {
      labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      phDataValues = phData.map(data => data.y);
      temperatureDataValues = temperatureData.map(data => data.y);
    }

    const updatedTableData = labels.map((label, index) => ({
      time: label,
      pH: phDataValues[index],
      temperature: temperatureDataValues[index],
    }));
    setTableData(updatedTableData);

    const chartCanvas = chartCanvasRef.current;
    if (chartCanvas) {
      const chartCtx = chartCanvas.getContext('2d');
      if (chartCtx) {
        const updatedChartData = {
          labels,
          datasets: [
            {
              label: 'pH',
              data: phDataValues,
              backgroundColor: '#87CEEB',
              borderColor: '#87CEEB',
              borderWidth: 1,
            },
            {
              label: 'Temperature (°C)',
              data: temperatureDataValues,
              backgroundColor: '#FF0000',
              borderColor: '#FF0000',
              borderWidth: 1,
            },
          ],
        };

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
                ticks: {
                  maxTicksLimit: 10,
                  maxRotation: 0,
                  minRotation: 0,
                },
              },
              y: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 30,
              },
            },
          },
        });
      }
    }
  };

  useEffect(() => {
    try {
      // Display a subset of pH data (5 items) for better visualization
      const phDataSubset = phData.slice(0, 5);
      setPhDataSubset(phDataSubset);
      updateChartData('day');
    } catch (error) {
      console.error('Error updating chart:', error);
    }
  }, []);

  return (
    <div className='ml-[560px]'>
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
        <div className="border-4 p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center ">
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
      <div></div>
      <div className="flex justify-center mt-[180px]" style={{ maxWidth: '280%', margin: '0 auto' }}>
        <canvas ref={chartCanvasRef} id="chartCanvas" width="150px" height="50"></canvas>
      </div>
      <div className="mx-auto w-[120%] mt-7 space-y-2">
        <div className="display-flex text-white bg-blue-950 p-4 flex justify-between items-center mt-2 gap-10">
          <div className="flex gap-20 items-center text-center">
            <p className="text-xs font-semibold">Time</p>
            <p className="text-xs font-semibold">pH</p>
            <p className="text-xs font-semibold">Temperature (°C)</p>
          </div>
        </div>
        {tableData.map((item: { time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; pH: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; temperature: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
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





















