import React from 'react';
import styled from 'styled-components';
import DriverCard from './DriverListCard';

const DriversList = ({ drivers, handleChange }) => {
  return (
    <DrivesDiv>
      <CardHead>DRIVERS</CardHead>
      {drivers.map(driver => (
        <DriverCard
          key={driver.driverID}
          driver={driver}
          handleChange={() => handleChange(driver)}
        />
      ))}
    </DrivesDiv>
  );
};

const DrivesDiv = styled.section`
  // border: 2px red solid;
  width: 30%;
  padding: 1rem;
  background: #ececec;
  overflow-y: scroll;
`;

const CardHead = styled.div`
  // border: 2px black solid;
  border-bottom: 1px rgb(228, 228, 228) solid;
  padding: 1rem;
  background: #fff;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  font-weight: 900;
  box-shadow: 0px -4px 11px -6px rgba(0, 0, 0, 0.68);
`;

export default DriversList;
