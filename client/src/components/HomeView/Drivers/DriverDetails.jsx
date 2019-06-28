import React from 'react';
import styled from 'styled-components';
import DriverListCard from './DriverListCard';
import DriverDetailCard from './DriverDetailCard';

const DriverDetails = ({ driver }) => {
  return (
    <DrivesDiv>
      <DriverListCard driver={driver} />
      <div style={{ height: '20%', background: '#c6c6c6' }}>DRIVER NAME</div>
      <div
        style={{
          height: '8%',
          // border: '2px red solid',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <span style={buttonCut}>0</span>
        <Button>
          <i className="far fa-thumbs-up" />
          <span
            style={{
              marginRight: '2rem',
              marginLeft: '0.3rem',
              fontSize: '0.8rem',
              fontWeight: '600',
            }}
          >
            Like
          </span>
        </Button>
        <span style={shareIcons}>
          <i className="fab fa-facebook-square" />
        </span>
        <span style={shareIcons}>
          <i className="fab fa-twitter-square" />
        </span>
        <span style={shareIcons}>
          <i className="fab fa-linkedin" />
        </span>
      </div>
      <DriverDetailCard driver={driver} />
    </DrivesDiv>
  );
};

const DrivesDiv = styled.section`
  // border-left: 1.5px #66717a solid;
  box-shadow: -2px 0px 0px 0px rgba(209, 207, 209, 1);
  width: 70%;
  margin-right: 2rem;
`;

const shareIcons = {
  fontSize: '1.3rem',
  cursor: 'pointer',
  margin: '0.5rem 1rem',
};

const Button = styled.button`
  outline: none;
  margin: 0.5rem 1rem;
  cursor: pointer;
  width: 13%;
  height: 40px;
  border-radius: 30px;
  border: 1px #fdfdfd solid;
`;

const buttonCut = {
  border: '1px #fdfdfd solid',
  width: '5%',
  height: '40px',
  position: 'absolute',
  borderTopRightRadius: '30px',
  borderBottomRightRadius: '30px',
  backgroundColor: 'rgb(235, 236, 237)',
  left: 88,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'system-ui',
};

export default DriverDetails;
