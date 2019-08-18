import React from 'react';
import styled from 'styled-components';
import BarContents from './BarContents';

const contents = [
  {
    name: 'Home',
    icon: 'fab fa-houzz',
    display: false,
  },
  {
    name: 'Drivers',
    icon: 'fas fa-user',
    display: false,
  },
  {
    name: 'Dashboard',
    icon: 'fas fa-chart-line',
    display: false,
  },
  {
    name: 'Tripter',
    display: true,
  },
];
const SideBar = () => {
  return (
    <SideBarSection>
      {contents.map((content, i) => (
        <BarContents key={i} content={content} />
      ))}
    </SideBarSection>
  );
};

const SideBarSection = styled.section`
  box-shadow: 2px 1px 0px 0px rgba(209, 207, 209, 1);
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default SideBar;
