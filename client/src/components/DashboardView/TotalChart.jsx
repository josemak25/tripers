import React from 'react';

import { Bar } from 'react-chartjs-2';

const TotalChart = ({ stats }) => {
  const { nonCashBilledTotal, cashBilledTotal, billedTotal } = stats;
  const data = {
    labels: ['nonCashBilledTotal', 'cashBilledTotal', 'billedTotal'],
    datasets: [
      {
        label: 'All Trip Total Bills',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [nonCashBilledTotal, cashBilledTotal, billedTotal],
      },
    ],
  };

  return (
    <div style={chartStyle}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TotalChart;

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'bottom',
    labels: {
      fontSize: 10,
      usePointStyle: true,
      padding: 5,
    },
  },
  scales: {
    xAxes: [
      {
        barPercentage: 0.5,
        minBarLength: 2,
      },
    ],
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 20,
      bottom: 0,
    },
  },
};

const chartStyle = {
  height: '18rem',
  borderRadius: '1rem',
  backgroundColor: '#fff',
  boxShadow: '00px 0px 3px 1px rgba(153,150,153,1)',
};
