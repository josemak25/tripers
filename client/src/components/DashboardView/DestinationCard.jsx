import React, { useContext } from 'react';
import {
  TripReceiptContext,
  convertToNumber,
  todayTime,
  tripRequests,
} from './Helpers';

const DestinationCard = () => {
  const trip = useContext(TripReceiptContext);
  if (!Array.isArray(trip)) {
    var billedAmount = trip.billedAmount;
    var { address: pickupAddress } = trip.pickup;
    var { address: descAddress } = trip.destination;
  }

  return (
    <>
      <section style={destinationLog.amount}>
        <div style={destinationLog.amountMoney}>
          ${convertToNumber(billedAmount)}
        </div>
        <div style={destinationLog.amountDate}>
          <h4 style={destinationLog.todayDate}>TODAY</h4>
          <h5 style={destinationLog.todayTime}>{todayTime()}</h5>
        </div>
      </section>
      <section style={destinationLog.requests}>
        <div style={destinationLog.trip}>
          <i
            className="fas fa-arrows-alt-v"
            style={destinationLog.destinationIcon}
          />
          <span style={destinationLog.arrival}>
            <div style={destinationLog.pickUp}>{pickupAddress}</div>
            <div style={destinationLog.dropOff}>{descAddress}</div>
          </span>
        </div>
        <div style={destinationLog.destinationRequest}>
          <span style={destinationLog.requestFont}>
            <div>ACCEPTED</div>
            <div style={destinationLog.requestCount}>1</div>
          </span>
          <span style={destinationLog.requestFont}>
            <div>REQUESTS</div>
            <div style={destinationLog.requestCount}>{tripRequests()}</div>
          </span>
        </div>
      </section>
    </>
  );
};

export default DestinationCard;

const destinationLog = {
  amount: {
    borderLeft: '0.3rem #ff6384 solid',
    width: '25%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0 0.5rem',
    marginLeft: '0.5rem',
    marginTop: '10rem',
    borderBottomLeftRadius: '5px',
    borderTopLeftRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '-2px 1px 10px -3px rgba(0,0,0,0.75)',
  },

  requests: {
    backgroundColor: '#fff',
    width: '75%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: '0.5rem',
    marginTop: '10rem',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    boxShadow: '1px 1px 10px -3px rgba(0,0,0,0.75)',
  },

  amountMoney: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#ff6384',
  },

  amountDate: {
    width: '120%',
    color: '#66717a',
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
    display: 'flex',
    fontSize: '0.7rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  requestCount: {
    textAlign: 'center',
    marginTop: '0.3rem',
  },

  destinationIcon: {
    color: '#66717a',
    height: 'auto',
    marginTop: '1rem',
  },

  arrival: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#4a4f54',
  },

  todayDate: {
    margin: '0',
    fontWeight: 400,
    textAlign: 'center',
  },

  todayTime: {
    margin: '0',
    fontWeight: 500,
  },

  requestFont: { fontWeight: 600, color: '#66717a' },
};
