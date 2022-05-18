import React from 'react';

export const TableItem = ({ itemData }) => {
  return (
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {itemData}
    </td>
  );
};
