import React from 'react';
import styled from 'styled-components';
import DestinationCard from './DestinationCard';
import TripReceipt from './TripReceipt';
import RecentTrips from './RecentTrips';

export default function Trips() {
  return (
    <>
      <TripSection>
        <div style={receipt}>
          <TripReceipt />
        </div>
        <div style={destinationLog}>
          <DestinationCard />
        </div>
      </TripSection>
      <RecentSection>
        <RecentTrips />
        <RecentTrips />
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
  display: flex;
  justify-content: space-evenly;
`;

const receipt = {
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // backgroundColor: '#f4f6fa',
};

const destinationLog = {
  width: '40%',
  display: 'flex',
};
