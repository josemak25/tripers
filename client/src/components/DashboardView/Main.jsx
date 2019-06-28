import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import DashBordTable from './DashBordTable';
import ChartCard from './ChartCard';

const path = '';
const tripsContext = React.createContext();

const MainSection = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('api/trips')
      .then(res => res.json())
      .then(data => {
        setTrips(data.data);
        console.log(data.data);
      });
  }, []);

  const AllTrips = useContext(tripsContext);

  return (
    <Main>
      <section style={header}>
        <h1>Overview</h1>
        <div style={welcome}>
          <span>
            <i className="far fa-bell" style={iconColor} />
          </span>
          <span>
            <i className="far fa-envelope" style={iconColor} />
          </span>
          <span>
            <i className="fas fa-search" style={iconColor} />
          </span>
        </div>
      </section>
      <section style={message}>
        Welcome back, You have a
        <a href={path} style={{ marginLeft: '0.5rem' }}>
          new Message
        </a>
      </section>
      <section style={infoHolder}>
        <section style={graphHolder}>
          <ChartCard />
          <DashBordTable />
        </section>
        <section style={tripDetail}>
          <div>TRIP</div>
        </section>
      </section>
    </Main>
  );
};

export default MainSection;

const Main = styled.section`
  // border: 2px red solid;
  width: 100%;
  background: 'inherit';
  padding: 0.5rem 2rem;
`;

const welcome = {
  // border: '2px brown solid',
  width: '5%',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
};

const iconColor = { color: '#9a9a9a' };

const message = {
  // border: '2px grey solid',
  height: '3.1rem',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem',
  backgroundColor: '#fff',
  borderRadius: '5px',
  boxShadow: '00px 0px 3px 1px rgba(153,150,153,1)',
};

const header = {
  // border: '2px black solid',
  height: '3.3rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const graphHolder = {
  border: '2px blue solid',
  width: '50%',
};

const tripDetail = {
  border: '2px green solid',
  width: '50%',
};

const infoHolder = {
  border: '2px brown solid',
  display: 'flex',
  height: '36.7rem',
};
