import * as React from 'react';

// components
import { TableHeadItem } from './TableHeadItem';

export const TableHead = ({ tableHeadItems }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {tableHeadItems.map((item) => {
          return <TableHeadItem key={item.id} itemText={item.text} />;
        })}
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};
