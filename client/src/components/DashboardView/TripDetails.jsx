import React from 'react';
import styled from 'styled-components';

export default function Trips() {
  return (
    <>
      <TripSection>
        <div style={receipt}>
          <h6 style={{ margin: '0.6rem' }}>Trip Receipt</h6>
          <section style={destination}>
            <span>Lagos</span>
            <span>to Icon</span>
            <span>Ibadan</span>
          </section>
          <div style={receiptDate}>
            <span style={receiptDate.day}>20</span>
            <span style={receiptDate.nthDay}>th</span>
            March, Wednesday
          </div>
          <Details>
            <div style={receiptIcon}>icon</div>
            <section>
              <h2 style={receiptDetails.driverName}>Garcia Gaines</h2>
              <div style={receiptDetails.price}>
                <span>
                  <h5 style={receiptDetails.passengerTag}>Passenger</h5>
                  <h3 style={receiptDetails.passengerName}>Aurelia Rios</h3>
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
                |||||||||||||||||||||||||||||
              </span>
            </section>
          </Details>
        </div>
        <div style={destinationLog}>
          <section style={destinationLog.amount}>
            <div style={destinationLog.amountMoney}>$276</div>
            <div style={destinationLog.amountDate}>
              <h4
                style={{
                  margin: '0',
                  fontWeight: 400,
                  textAlign: 'center',
                }}
              >
                TODAY
              </h4>
              <h5
                style={{
                  margin: '0',
                  fontWeight: 500,
                }}
              >
                06:30 PM
              </h5>
            </div>
          </section>
          <section style={destinationLog.requests}>
            <div style={destinationLog.trip}>
              <i
                className="fas fa-arrows-alt-v"
                style={destinationLog.destinationIcon}
              />
              <span style={destinationLog.arrival}>
                <div style={destinationLog.pickUp}>
                  311 Woodbine Street, Catharine, Kentucky, 8240
                </div>
                <div style={destinationLog.dropOff}>
                  311 Woodbine Street, Catharine, Kentucky, 8240
                </div>
              </span>
            </div>
            <div style={destinationLog.destinationRequest}>Request</div>
          </section>
        </div>
      </TripSection>
      <RecentSection>
        <div>Recent Rides</div>
      </RecentSection>
    </>
  );
}

const TripSection = styled.section`
  height: 75%;
  display flex
`;

const RecentSection = styled.section`
  border: 2px yellow solid;
  height: 25%;
`;

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
  fontSize: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: -12,
  color: '#ff6384',
  fontWeight: 600,
};

const receipt = {
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f4f6fa',
};

const destination = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  fontSize: '0.8rem',
  fontWeight: '450',
};

const receiptDate = {
  margin: '1rem',
  fontSize: '0.7rem',
  day: { fontSize: '1.1rem' },
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
    height: '5rem',
    paddingLeft: '0.5rem',
    boxShadow: '0px 0px 3px -1px rgba(189,189,189,1)',
  },

  passengerTag: {
    fontSize: '0.6rem',
    fontWeight: 'unset',
    marginLeft: '1rem',
  },

  passengerName: {
    fontSize: '0.7rem',
    fontWeight: '550',
    marginLeft: '1rem',
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

const destinationLog = {
  width: '40%',
  display: 'flex',
  amount: {
    borderLeft: '0.3rem #ff6384 solid',
    width: '25%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0 0.5rem',
  },
  requests: {
    border: '2px yellow solid',
    width: '75%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxShadow: '-1px 0px 0px 0px rgba(189,189,189,1)',
  },

  amountMoney: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#ff6384',
  },

  amountDate: {
    width: '120%',
  },

  pickUp: {
    fontSize: '0.6rem',
    margin: '0.3rem 0',
    textAlign: 'center',
    paddingBottom: '0.6rem',
    boxShadow: '0px 1px 0px 0px rgba(189,189,189,1)',
  },

  dropOff: {
    fontSize: '0.6rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },

  trip: {
    width: '90%',
    height: '50%',
    marginBottom: '1.5rem',
    display: 'flex',
  },

  destinationRequest: {
    width: '90%',
    height: '40%',
  },

  destinationIcon: {
    color: '#66717a',
    height: 'auto',
  },

  arrival: {
    // border: '1px pink solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};
