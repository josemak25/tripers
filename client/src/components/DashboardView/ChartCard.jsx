import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import TotalChart from './TotalChart';

const ChartCard = () => {
  const [stats, setStats] = useState([]);
  const [totalStats, setTotalStats] = useState([]);

  useEffect(() => {
    fetch('api/stats')
      .then(res => res.json())
      .then(data => {
        setTotalStats(data.data);
        const statDetails = [
          {
            name: ['male', 'female'],
            total: { dataOne: data.data.male, dataTwo: data.data.female },
          },
          {
            name: ['cashTrips', 'nonCashTrips'],
            total: {
              dataOne: data.data.noOfCashTrips,
              dataTwo: data.data.noOfNonCashTrips,
            },
          },
        ];
        setStats(statDetails);
      });
  }, []);

  return (
    <section style={chatSection}>
      <div style={cardHolder}>
        {stats.map((el, i) => (
          <div style={card} key={i}>
            <Chart stats={el} />
          </div>
        ))}
      </div>
      <div
        style={{
          //     border: '2px yellow solid',
          width: '65%',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <TotalChart stats={totalStats} />
      </div>
    </section>
  );
};

export default ChartCard;

const chatSection = {
  height: '20rem',
  //   border: '2px green solid',
  display: 'flex',
  marginBottom: '0.4rem',
};

const card = {
  // border: '1px red solid',
  height: '45%',
  borderRadius: '0.5rem',
  backgroundColor: '#fff',
  boxShadow: '00px 0px 3px 1px rgba(153,150,153,1)',
};

const cardHolder = {
  //   border: '2px black solid',
  width: '35%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '0 0.5rem',
};
