import React from 'react';
import styled from 'styled-components';

const TripReceipt = () => {
  return (
    <>
      <h6 style={{ margin: '0.6rem', color: '#fff' }}>Trip Receipt</h6>
      <section style={destination}>
        <span style={direction}>Lagos</span>
        <span style={{ fontSize: '1.2rem' }}>
          <i className="fas fa-arrow-circle-right" />
        </span>
        <span style={direction}>Ibadan</span>
      </section>
      <div style={receiptDate}>
        <span style={receiptDate.day}>20</span>
        <span style={receiptDate.nthDay}>th</span>
        March, Wednesday
      </div>
      <Details>
        <div style={receiptIcon}>
          <i className="fas fa-taxi" />
        </div>
        <section style={{ color: '#66717a' }}>
          <h2 style={receiptDetails.driverName}>Garcia Gaines</h2>
          <div style={receiptDetails.price}>
            <span>
              <h5 style={receiptDetails.passengerTag}>Passenger</h5>
              <h3 style={receiptDetails.passengerName}>
                Name: <span style={userDetails}>Sanford Valentine</span>
              </h3>
              <h3 style={receiptDetails.passengerName}>
                Email: <span style={userDetails}>Sanford@gmial.com</span>
              </h3>
              <h3 style={receiptDetails.passengerName}>
                Gender: <span style={userDetails}>Female</span>
              </h3>
              <h3 style={receiptDetails.passengerName}>
                Phone: <span style={userDetails}>+234 808-375-2326</span>
              </h3>
            </span>
            <span style={receiptDetails.dashedPrice}>
              <span style={receiptDetails.dollarSign}>$</span>
              2345
            </span>
          </div>
        </section>
        <section style={receiptDetails.pickup}>
          <span>
            <div>Pickup time</div>
            <div style={receiptDetails.pickupTime}>01: 22am</div>
          </span>
          <span>
            <div>Dropoff time</div>
            <div style={receiptDetails.pickupTime}>01: 22am</div>
          </span>
        </section>
        <section style={receiptDetails.barCode}>
          <span style={{ margin: 'auto', fontSize: '1rem' }}>
            |||||||||||||||||||||||
          </span>
        </section>
      </Details>
    </>
  );
};

export default TripReceipt;

const Details = styled.div`
  border-radius: 1rem;
  background: #fff;
  width: 90%;
  height: 73%;
  position: relative;
  box-shadow: 0px 0px 3px 1px rgba(153, 150, 153, 1);
`;

const receiptIcon = {
  width: '45px',
  height: '45px',
  backgroundColor: '#fff',
  position: 'relative',
  right: -155,
  borderRadius: '30px',
  fontSize: '1.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: -12,
  color: '#ff6384',
  fontWeight: 600,
};

const destination = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  fontSize: '0.8rem',
  fontWeight: '450',
  color: '#fff',
};

const receiptDate = {
  color: '#fff',
  margin: '1rem',
  fontSize: '0.7rem',
  day: { fontSize: '1.1rem', fontWeight: '500' },
  nthDay: {
    fontSize: '0.5rem',
    marginRight: '0.5rem',
  },
};

const receiptDetails = {
  driverName: {
    fontSize: '0.7rem',
    textAlign: 'center',
    padding: '1rem',
    fontWeight: '550',
    marginTop: '-1rem',
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '6rem',
    paddingLeft: '0.5rem',
    boxShadow: '0px 0px 3px -1px rgba(189,189,189,1)',
    paddingTop: '0.5rem',
  },

  passengerTag: {
    fontSize: '0.6rem',
    fontWeight: 'unset',
    marginLeft: '1rem',
    marginTop: '0.1rem',
    marginBottom: 0,
  },

  passengerName: {
    fontSize: '0.7rem',
    fontWeight: '550',
    marginLeft: '1rem',
    marginTop: '0.1rem',
    marginBottom: 0,
  },

  dashedPrice: {
    border: '2px #ececec dashed',
    display: 'flex',
    alignItems: 'center',
    height: '2rem',
    margin: 'auto 0',
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
  pickup: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.7rem',
    height: '20%',
    alignItems: 'center',
    fontWeight: '500',
    padding: '0 1.5rem',
    boxShadow: '0px 0px 3px -1px rgba(189,189,189,1)',
    color: '#66717a',
  },
  pickupTime: { fontWeight: '800', fontSize: '0.8rem' },

  barCode: {
    textAlign: 'center',
    height: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.7rem',
  },
};

const direction = { fontSize: '1.2rem', fontWeight: 600 };

const userDetails = {
  fontSize: '0.6rem',
  fontWeight: '450',
};
