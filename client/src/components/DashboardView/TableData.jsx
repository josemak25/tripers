import React from 'react';

const TableData = () => {
  return (
    <tr style={tableRow}>
      <td style={tableData}>
        <span style={icon}>
          <i className="fas fa-ellipsis-v" style={icon.children} />
        </span>
        <span style={{ textAlign: 'center', fontSize: '0.7rem' }}>
          Alfreds Futterkiste Alfreds
        </span>
      </td>
      <td style={contentData}>Maria Anders Alfreds Futterkiste</td>
      <td style={contentData}>Germany</td>
    </tr>
  );
};

export default TableData;

const icon = {
  //     border: '2px grey solid',
  marginRight: '1rem',
  marginLeft: '1rem',
  cursor: 'pointer',

  children: { color: '#9a9a9a' },
};

const tableRow = {
  //     borderBottom: '0.05px #9a9a9a solid',
  boxShadow: '0px 1px 0px 0px rgba(209,207,209,1)',
  //     border: '2px yellow solid',
  height: '2rem',
  padding: '2rem',
};

const tableData = {
  // border: '2px red solid',
  marginTop: '0.2rem',
  display: 'flex',
  alignItems: 'center',
};

const contentData = {
  //     border: '2px solid red',
  textAlign: 'center',
  padding: '1px',
  fontSize: '0.7rem',
};
