import * as React from 'react';

export const TableBody = ({ children }) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
  );
};
