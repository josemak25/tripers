import React from 'react';
import styled from 'styled-components';

const TripReceipt = () => {
  return (
    <Details>
      <div style={receiptIcon}>icon</div>
      <section style={{ color: '#66717a' }}>
        <div style={receiptDetails.price}>
          <span>
            <h5 style={receiptDetails.DayOfTrip}>20th</h5>
            <h3 style={receiptDetails.DateOfTrip}>March, Wednesday</h3>
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
  fontSize: '0.5rem',
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
    //     boxShadow: '0px 0px 3px -1px rgba(189,189,189,1)',
    margin: 0,
    position: 'absolute',
    top: '1px',
    width: '100%',
  },

  DayOfTrip: {
    fontSize: '0.6rem',
    fontWeight: 'unset',
    marginLeft: '1rem',
  },

  DateOfTrip: {
    fontSize: '0.7rem',
    fontWeight: '550',
    marginLeft: '1rem',
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
