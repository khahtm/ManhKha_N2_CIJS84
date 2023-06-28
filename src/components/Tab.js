import React from 'react';

const Tab = ({ title, isActive, onClick }) => {
  return (
    <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Tab;
