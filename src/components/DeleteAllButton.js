import React from 'react';

const DeleteAllButton = ({ deleteAllTodos }) => {
  return (
    <button className="delete-all-button" onClick={deleteAllTodos}>
      Delete All
    </button>
  );
};

export default DeleteAllButton;
