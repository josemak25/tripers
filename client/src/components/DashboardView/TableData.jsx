import React, { useContext } from 'react';
import { DriversContext } from './Context';

const TableData = ({ trip }) => {
  const drivers = useContext(DriversContext);

  const fetchDriver = driverID => {
    const driver = drivers[driverID];
    if (!driver) return 'Not Available';
    return driver.name;
  };

  return (
    <tr style={tableRow}>
      <td style={tableData}>
        <span style={icon}>
          <i className="fas fa-ellipsis-v" style={icon.children} />
        </span>
        <span style={{ textAlign: 'center', fontSize: '0.7rem' }}>
          {fetchDriver(trip.driverID)}
        </span>
      </td>
      <td style={contentData}>{trip.user.name}</td>
      <td style={bill}>${trip.billedAmount}</td>
    </tr>
  );
};

export default TableData;

const icon = {
  marginRight: '1rem',
  marginLeft: '1rem',
  cursor: 'pointer',

  children: { color: '#9a9a9a' },
};

const tableRow = {
  boxShadow: '0px 1px 0px 0px rgba(209,207,209,1)',
  height: '2rem',
  padding: '2rem',
};

const tableData = {
  marginTop: '0.2rem',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '500',
};

const contentData = {
  textAlign: 'center',
  padding: '1px',
  fontSize: '0.7rem',
  fontWeight: '500',
};

const bill = {
  color: '#ff6384',
  ...contentData,
  fontWeight: '600',
};
