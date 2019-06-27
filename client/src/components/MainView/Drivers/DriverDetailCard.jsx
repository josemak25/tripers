import React from 'react';
import driveOnGlass from '../../../images/man-on-glass.jpg';
import driveOnTie from '../../../images/man-on-tie.jpg';

const DriverDetailCard = () => {
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
          <h1 style={texts}>John Doe</h1>
          <h5 style={h5}>Johngrey@gmail.com</h5>
          <div>
            <h2 style={letter}>Gender: male</h2>
            <h4 style={letter}>Agent: TECHMANIA</h4>
            <h4 style={letter}>Phone: +234 808-364-2821</h4>
            <h4 style={letter}>DOB: 1973-04-27T11:49:50+01:00</h4>
            <h4 style={letter}>
              Address: 510 Atkins Avenue, Escondida, Federated States Of
              Micronesia, 5412
            </h4>
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
