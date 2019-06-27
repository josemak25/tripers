import React from 'react';
import styled from 'styled-components';

const DriverCard = () => {
  return (
    <Card>
      <div style={letter}>A</div>
      <span>
        <h1 style={texts}>driver name</h1>
        <h5 style={h5}>driver email</h5>
      </span>
    </Card>
  );
};

const Card = styled.div`
    border-bottom: 1px rgb(228, 228, 228) solid;
    display flex;
    align-items: center;
    height: 4rem;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    box-shadow: -2px 5px 4px -4px rgba(0,0,0,0.75);
    background-color: #fff;
    cursor: pointer
`;

const texts = {
  margin: 0,
  fontWeight: 500,
};

const h5 = {
  color: 'rgb(119, 119, 119)',
  ...texts,
};

const letter = {
  //     border: '2px green solid',
  height: '30px',
  width: '30px',
  padding: '5px',
  borderRadius: '30px',
  margin: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '900',
  fontSize: '2rem',
  background: 'blue',
  color: '#fff',
  boxShadow: '0px 2px 19px -6px rgba(0,0,0,0.67)',
};

export default DriverCard;
