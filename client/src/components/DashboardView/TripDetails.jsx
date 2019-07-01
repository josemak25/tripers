import React from 'react';
import styled from 'styled-components';
import DestinationCard from './DestinationCard';
import TripReceipt from './TripReceipt';
import RecentTrips from './RecentTrips';

export default function Trips(props) {
  const { recentRides } = props;

  return (
    <>
      <TripSection>
        <div style={receipt}>
          <TripReceipt />
        </div>
        <div style={receiptBackground} />

        <div style={destinationLog}>
          <DestinationCard />
        </div>
      </TripSection>
      <RecentSection>
        {recentRides.map((ride, i) => (
          <RecentTrips key={i} ride={ride} />
        ))}
      </RecentSection>
    </>
  );
}

const TripSection = styled.section`
  height: 75%;
  display flex;
`;

const RecentSection = styled.section`
  height: 25%;
  display: flex;
  justify-content: space-evenly;
`;

const receipt = {
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,
};

const destinationLog = {
  width: '40%',
  display: 'flex',
};

const receiptBackground = {
  position: 'absolute',
  width: '58.5%',
  height: '28%',
  background: '#ff6384',
  marginLeft: '0.3rem',
  borderRadius: '3px',
};
