import React from 'react';
import styled from 'styled-components';

const TripReceipt = () => {
  return (
    <Details>
      <div style={receiptIcon}>
        <i className="fas fa-car-alt" />
      </div>
      <section style={{ color: '#66717a' }}>
        <div style={receiptDetails.price}>
          <span>
            <h5 style={receiptDetails.DayOfTrip}>20th</h5>
            <h3 style={receiptDetails.DateOfTrip}>March, Wednesday</h3>
            <h3 style={receiptDetails.DayOfTrip}>Sanford Valentine </h3>
            <h6 style={userEmail}>Sanford@gmial.com</h6>
          </span>
          <span style={receiptDetails.dashedPrice}>
            <span style={receiptDetails.dollarSign}>$</span>
            2345
          </span>
        </div>
      </section>
    </Details>
  );
};

export default TripReceipt;

const Details = styled.div`
  border-radius: 1rem;
  background: #fff;
  width: 45%;
  position: relative;
  box-shadow: 0px 0px 3px 1px rgba(153, 150, 153, 1);
  margin-top: 1rem;
  height: 81%;
`;

const receiptIcon = {
  width: '45px',
  height: '45px',
  backgroundColor: '#fff',
  position: 'relative',
  right: -125,
  borderRadius: '30px',
  fontSize: '1.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: -12,
  color: '#ff6384',
  fontWeight: 600,
};

const receiptDetails = {
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '5rem',
    paddingLeft: '0.5rem',
    margin: 0,
    position: 'absolute',
    top: '1px',
    width: '100%',
  },

  DayOfTrip: {
    fontSize: '0.6rem',
    fontWeight: '900',
    marginLeft: '1rem',
    marginBottom: 0,
  },

  DateOfTrip: {
    fontSize: '0.7rem',
    fontWeight: 'unset',
    marginLeft: '1rem',
    marginTop: 0,
    marginBottom: 0,
  },

  dashedPrice: {
    border: '1px #ececec dashed',
    display: 'flex',
    alignItems: 'center',
    height: '2rem',
    margin: 'auto 0.5rem',
    paddingLeft: '1.5rem',
    paddingRight: '0.6rem',
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',
    color: '#ff6384',
    fontWeight: '600',
  },

  dollarSign: {
    fontSize: '0.8rem',
    marginBottom: '0.5rem',
    paddingRight: '0.1rem',
  },
};

const userEmail = {
  ...receiptDetails.DayOfTrip,
  marginTop: '0px',
  fontWeight: 'unset',
};
