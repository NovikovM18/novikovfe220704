import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const labels= ['Landing Page', 'Configurator', 'Check-out', 'Deal'];
  const [data, setData] = useState([7.4, 0.2, 7, 3.8]);
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: "(SECOND)",
        data: data,
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
      },
    ],
  });
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "(SECOND)",
          data: data,
          borderColor: ['rgba(54, 162, 235, 0.2)'],
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        },
      ],
    });
    setChartOptions({
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    });
  }, [data]);

  function setRandomData() {
    console.log('set');

    setData(data.map(el => el = 60 * Math.random()));
  };

  useEffect(() => {
    setInterval(() => {
      setRandomData()
    }, 30000);
  }, []);

  return (
    <div className="chart">
      <Bar options={chartOptions} data={chartData} />
      <button className='btn' onClick={setRandomData}>RANDOMIZE</button>
    </div>
  );
}

export default Chart;