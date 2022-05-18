import React from 'react';

export const TableHeadItem = ({ itemText }) => {
  return (
    <th
      scope="col"
      className="px-3 py-4  text-left text-sm font-semibold text-gray-900"
    >
      {itemText}
    </th>
  );
};
