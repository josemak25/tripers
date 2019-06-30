import React from 'react';

export const TripsContext = React.createContext();
export const DriversContext = React.createContext();
export const UpdateTripContext = React.createContext();
export const TripReceiptContext = React.createContext();

const fetchDriver = (driverID, drivers) => {
  const driver = drivers[driverID];
  if (!driver) return 'Not Available';
  return driver.name;
};

export default fetchDriver;

export const convertToNumber = bill => {
  if (!bill) return;

  if (typeof bill !== 'string') return parseInt(bill);

  return Number(parseInt(bill.replace(',', '')));
};

export const getAddress = address => {
  if (!address) return;
  const names = address.split(',')[0].split(' ');
  const [, ...street] = names;
  return street.join(' ');
};

export const getDate = date => {
  if (!date) return;

  const newDate = new Date(date);
  const halfDay = newDate.toDateString().split(' ')[0];

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const day = days.find(day =>
    day.toLocaleLowerCase().includes(halfDay.toLocaleLowerCase()),
  );

  const numericDay = newDate.toLocaleString('en', { day: 'numeric' });
  const weekday = `${day},  ${newDate.toLocaleString('en', { month: 'long' })}`;

  return [numericDay, weekday];
};

export const tripTime = time => {
  if (!time) return;

  const date = new Date(time);

  const pickupTime = new Date(date + 2 * 60 * 60 * 1000).toLocaleTimeString(
    'en-US',
    { hour: 'numeric', hour12: true, minute: 'numeric' },
  );

  const changedTime = +pickupTime[0] + 2;
  const dropOffTime = pickupTime.replace(pickupTime.charAt(0), changedTime);

  return { pickupTime, dropOffTime };
};

export const todayTime = () => {
  return new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });
};

export const tripRequests = () => {
  return Math.floor(Math.random() * 6 + 1);
};

export const recentTrips = (trips, driverID) => {
  let count = 3;
  const result = [];

  for (let index = 0; index < trips.length; index++) {
    if (trips[index].driverID === driverID) {
      count--;
      result.push(trips[index]);
    }

    if (count === 0 || index === trips.length - 1) {
      if (result.length === 1) return result;
      if (result.length === 2) return result.splice(0, 1);
      if (result.length === 3) return result.splice(1, 2);
    }
  }
};
