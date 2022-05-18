import React from 'react';

export const TableEditButton = ({ item }) => {
  return (
    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
      <button className="text-indigo-600 hover:text-indigo-900">
        Edit
        <span className="sr-only">, Edit item</span>
      </button>
    </td>
  );
};
