import React, { useContext } from 'react';
import fetchDriver, { DriversContext } from './Helpers';

const TableData = ({ trip, handleChange }) => {
  const drivers = useContext(DriversContext);
  const { driverID } = trip;
  return (
    <tr style={tableRow}>
      <td style={tableData}>
        <span style={icon} onClick={handleChange}>
          <i className="fas fa-ellipsis-v" style={icon.children} />
        </span>
        <span style={{ textAlign: 'center', fontSize: '0.7rem' }}>
          {fetchDriver(driverID, drivers)}
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
