import React from 'react';
import driveOnTie from '../../../images/man-on-tie.jpg';

const DriverDetailCard = ({ driver }) => {
  const { name, gender, agent, email, phone, DOB, address } = driver;
  return (
    <div style={styles}>
      <div
        style={{
          //     border: '2px black solid',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={driveOnTie} alt="Driver Avatar" style={imageStyle} />
      </div>
      <div
        style={{
          //     border: '2px green solid',
          width: '50%',
        }}
      >
        <div style={{ background: '#24292f', height: '30%' }} />
        <div>
          <h1 style={texts}>{name}</h1>
          <h5 style={h5}>{email}</h5>
          <div>
            <h2 style={letter}>Gender: {gender}</h2>
            <h4 style={letter}>Agent: {agent}</h4>
            <h4 style={letter}>Phone: {phone}</h4>
            <h4 style={letter}>DOB: {DOB}</h4>
            <h4 style={letter}>Address: {address}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetailCard;

const styles = {
  height: '55%',
  borderRadius: '3px',
  display: 'flex',
  boxShadow: '0px 1px 23px -6px rgba(0,0,0,0.76)',
};

const texts = {
  marginBottom: 5,
  fontWeight: 800,
};

const h5 = {
  color: 'rgb(119, 119, 119)',
  margin: 0,
  fontWeight: 500,
};

const letter = {
  fontWeight: 500,
  fontSize: '1rem',
};

const imageStyle = {
  width: '360px',
  height: '360px',
  borderRadius: '360px',
  boxShadow: '0px 1px 23px -6px rgba(0,0,0,0.76)',
};
