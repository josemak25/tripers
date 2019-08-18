import React from 'react';
import styled from 'styled-components';
import { convertToNumber, getDate } from './Helpers';

const TripReceipt = ({ ride }) => {
  const { name, email } = ride.user;
  const billedAmount = ride.billedAmount;
  const [day, weekday] = getDate(ride.created);

  return (
    <Details>
      <div style={receiptIcon}>
        <i className="fas fa-car-alt" />
      </div>
      <section style={{ color: '#66717a' }}>
        <div style={receiptDetails.price}>
          <span>
            <h5 style={receiptDetails.DayOfTrip}>{day}th</h5>
            <h3 style={receiptDetails.DateOfTrip}>{weekday}</h3>
            <h3 style={receiptDetails.DayOfTrip}>{name} </h3>
            <h6 style={userEmail}>{email}</h6>
          </span>
          <span style={receiptDetails.dashedPrice}>
            <span style={receiptDetails.dollarSign}>$</span>
            {convertToNumber(billedAmount)}
          </span>
        </div>
      </section>
    </Details>
  );
};

TripReceipt.defaultProps = {
  ride: {
    user: {
      name: 'sam',
      email: 'blah@blah.com',
    },
    billedAmount: '20000',
    created: '2019-04-09T06:08:12+01:00',
  },
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
