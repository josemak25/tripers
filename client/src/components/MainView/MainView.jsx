import React from 'react';
import styled from 'styled-components';
import DriverList from './Drivers/DriversList';
import DriverDetails from './Drivers/DriverDetails';
import SideBar from '../SideBar/SideBar';

const MainView = () => {
  return (
    <MainSection>
      <SideBar />
      <DriverList />
      <DriverDetails />
    </MainSection>
  );
};

const MainSection = styled.section`
  // border: 2px yellow solid;
  width: 95%;
  display: flex;
  background: #ececec;
`;

export default MainView;
