import React, { useContext } from 'react';
import TableData from './TableData';
import { TripsContext, UpdateTripContext } from './Helpers';

const DashBordTable = () => {
  const trips = useContext(TripsContext);
  const updateTripDetails = useContext(UpdateTripContext);

  return (
    <section>
      <div style={tableHolder}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr
              style={{
                boxShadow: '0px 1px 0px 0px rgba(209,207,209,1)',
              }}
            >
              <th style={table}>Drive Name</th>
              <th style={table}>User Name</th>
              <th style={table}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, i) => (
              <TableData
                key={i}
                trip={trip}
                handleChange={() => updateTripDetails(trip)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashBordTable;

const table = {
  textAlign: 'center',
  padding: '7px',
  fontSize: '0.8rem',
  background: '#ff6384',
  color: '#fff',
};

const tableHolder = {
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
