import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BarContents = ({ content }) => {
  const { name, icon, display } = content;
  return (
    <DivIcon display={display} name={name}>
      <Link to={name} style={{ color: '#66717a', textDecoration: 'none' }}>
        <div className="icon-target">
          <i className={icon} style={{ color: '#66717a' }} />
        </div>
        <span
          style={{
            display: display ? 'unset' : 'none',
          }}
        >
          {name}
        </span>
      </Link>
    </DivIcon>
  );
};

const DivIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  transform: ${({ display }) => (display ? 'rotate(270deg)' : 'undefined')};
  margin-top: ${({ display }) => (display ? '6rem' : 'undefined')};
  font-family: ${({ display }) => (display ? 'Pacifico, cursive' : 'inherit')};
  margin-bottom: ${({ name }) => (name === 'Home' ? '6rem' : 'undefined')};
`;

export default BarContents;
