import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';

const DriverCard = ({ driver, handleChange }) => {
  if (driver) {
    var { name, email } = driver;
  }

  return (
    <ErrorBoundary>
      <Card onClick={handleChange}>
        <div style={letter}>{name ? name[0] : undefined}</div>
        <span>
          <h1 style={texts}>{name}</h1>
          <h5 style={h5}>{email}</h5>
        </span>
      </Card>
    </ErrorBoundary>
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
  fontSize: '0.7rem',
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
  background: '#66717a',
  color: '#fff',
  boxShadow: '0px 2px 19px -6px rgba(0,0,0,0.67)',
};

export default DriverCard;
