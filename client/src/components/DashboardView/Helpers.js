import React from 'react';

export const TripsContext = React.createContext();
export const DriversContext = React.createContext();
export const UpdateTripContext = React.createContext();

const fetchDriver = (driverID, drivers) => {
  const driver = drivers[driverID];
  if (!driver) return 'Not Available';
  return driver.name;
};

export default fetchDriver;
