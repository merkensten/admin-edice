import React from 'react';

export const OrderTableItem = ({ order }) => {
  return (
    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
      {order.products.map((product, index) => {
        if (index === order.products.length - 1) {
          return <span key={product.id}>{product.name}</span>;
        } else {
          return <span key={product.id}>{product.name}, </span>;
        }
      })}
    </td>
  );
};
