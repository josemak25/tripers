import React, { useContext } from 'react';
import TableData from './TableData';
import { TripsContext } from './Context';

const DashBordTable = () => {
  const trips = useContext(TripsContext);

  return (
    <section style={{ paddingRight: '0.9rem', paddingLeft: '0.5rem' }}>
      <div style={tableHolder}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr style={{ boxShadow: '0px 1px 0px 0px rgba(209,207,209,1)' }}>
              <th style={table}>Drive Name</th>
              <th style={table}>User Name</th>
              <th style={table}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, i) => (
              <TableData key={i} trip={trip} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashBordTable;

const table = {
  // border: '1px solid black',
  textAlign: 'center',
  padding: '8px',
  fontSize: '0.5rem',
};

const tableHolder = {
  // border: '2px red solid',
  paddingTop: '0.6rem',
  backgroundColor: '#fff',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '2px',
  borderBottomRightRadius: '2px',
  overflowY: 'scroll',
  height: '15.5rem',
  boxShadow: '00px 0px 3px 1px rgba(153,150,153,1)',
  color: '#66717a',
};
