import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  TripsContext,
  DriversContext,
  UpdateTripContext,
  TripReceiptContext,
  recentTrips,
} from './Helpers';

import DashBordTable from './DashBordTable';
import TripDetails from './TripDetails';
import ChartCard from './ChartCard';

const path = '';

const MainSection = () => {
  const [trips, setTrips] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [receipt, setReceipt] = useState([]);
  const [recentTrip, setRecentTrip] = useState([]);

  useEffect(() => {
    fetch('api/trips')
      .then(res => res.json())
      .then(data => {
        setTrips(data.data);
        setReceipt(data.data[0]);
        const recentRides = recentTrips(data.data, data.data[0].driverID);
        setRecentTrip(recentRides);
      });

    fetch('/api/drivers')
      .then(res => res.json())
      .then(data => {
        const response = data.data.reduce((result, driver) => {
          if (!result[driver.driverID]) {
            result[driver.driverID] = driver;
          }
          return result;
        }, {});
        setDrivers(response);
      });
  }, []);

  const updateTripDetails = trip => {
    setReceipt(trip);

    const ride = recentTrips(trips, trip.driverID);
    setRecentTrip(ride);
    console.log(trip.driverID);
    console.log(ride);
  };

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
      <TripsContext.Provider value={trips}>
        <DriversContext.Provider value={drivers}>
          <section style={infoHolder}>
            <section style={graphHolder}>
              <ChartCard />
              <UpdateTripContext.Provider value={updateTripDetails}>
                <DashBordTable />
              </UpdateTripContext.Provider>
            </section>
            <section style={tripDetail}>
              <TripReceiptContext.Provider value={receipt}>
                <TripDetails recentRides={recentTrip} />
              </TripReceiptContext.Provider>
            </section>
          </section>
        </DriversContext.Provider>
      </TripsContext.Provider>
    </Main>
  );
};

export default MainSection;

const Main = styled.section`
  width: 100%;
  background: 'inherit';
  padding: 0.5rem 2rem;
`;

const welcome = {
  width: '5%',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
};

const iconColor = { color: '#9a9a9a' };

const message = {
  height: '3.1rem',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem',
  backgroundColor: '#fff',
  borderRadius: '5px',
  boxShadow: '00px 0px 3px 1px rgba(153,150,153,1)',
  color: '#66717a',
};

const header = {
  height: '3.3rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#66717a',
};

const graphHolder = {
  width: '50%',
};

const tripDetail = {
  width: '50%',
};

const infoHolder = {
  // border: '2px brown solid',
  display: 'flex',
  height: '36.7rem',
};
