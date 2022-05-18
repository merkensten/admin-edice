import React from 'react';

export const TableEditButton = ({ item, text, onClick }) => {
  return (
    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
      <button className="text-indigo-600 hover:text-indigo-900">
        {text}
        <span className="sr-only">, {text}</span>
      </button>
    </td>
  );
};
