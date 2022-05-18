import * as React from 'react';

// components
import { TableItem } from '../table/TableItem';
import { TableHead } from '../table/TableHead';
import { TableWrapper } from '../table/TableWrapper';
import { TableBody } from '../table/TableBody';
import { TableEditButton } from '../table/TableEditButton';
import { TableRow } from '../table/TableRow';

// hooks
import { GetData } from '../../hooks/useFetch';

export const ProductTable = () => {
  const {
    data: products,
    loading,
    error,
    errorMessage,
  } = GetData(`${process.env.REACT_APP_SERVER_URL}/resource/getall`);

  const tableHeadItems = [
    { id: 1, text: 'Productname' },
    { id: 2, text: 'Category' },
    { id: 3, text: 'Price' },
    { id: 4, text: 'Description' },
  ];

  return (
    <>
      <TableWrapper loading={loading} error={error} errorMessage={errorMessage}>
        <TableHead tableHeadItems={tableHeadItems} />

        <TableBody>
          {products.length > 0 &&
            products.map((product) => (
              <TableRow key={product._id}>
                <TableItem itemData={product.title} />
                <TableItem itemData={product.category} />
                <TableItem itemData={product.price} />
                <TableItem itemData={product.description} />
                <TableEditButton item={product} text="Edit Product" />
              </TableRow>
            ))}
        </TableBody>
      </TableWrapper>
    </>
  );
};
