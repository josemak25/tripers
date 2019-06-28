import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DriverList from './Drivers/DriversList';
import DriverDetails from './Drivers/DriverDetails';
import SideBar from '../SideBar/SideBar';

const MainView = () => {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState({});

  useEffect(() => {
    fetch('/api/drivers')
      .then(res => res.json())
      .then(data => {
        setDrivers(data.data);
        setDriver(data.data[0]);
      });
  }, []);

  const handleChange = driver => {
    setDriver(driver);
  };
  return (
    <MainSection>
      <SideBar />
      <DriverList drivers={drivers} handleChange={handleChange} />
      <DriverDetails driver={driver} />
    </MainSection>
  );
};

const MainSection = styled.section`
  border: 2px yellow solid;
  width: 95%;
  display: flex;
  background: #ececec;
`;

export default MainView;
