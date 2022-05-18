import React from 'react';

export const TableError = ({ errorMessage }) => {
  return (
    <div className="my-4">
      <p className="mt-2">Error occured while trying to fetch products</p>
      <p className="mt-2">{errorMessage}</p>
    </div>
  );
};
