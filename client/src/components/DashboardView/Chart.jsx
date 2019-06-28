import React from 'react';

import { Pie } from 'react-chartjs-2';

const Chart = ({ stats }) => {
  const { name, total } = stats;

  const data = {
    labels: [name[0], name[1]],
    datasets: [
      {
        data: [total.dataOne, total.dataTwo],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return <Pie data={data} width={90} height={80} options={options} />;
};

export default Chart;

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'bottom',
    labels: {
      fontSize: 11,
      usePointStyle: true,
      padding: 10,
    },
  },
};
