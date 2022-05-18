// imports
import * as React from 'react';

// components
import { TableItem } from '../table/TableItem';
import { TableHead } from '../table/TableHead';
import { TableWrapper } from '../table/TableWrapper';
import { TableBody } from '../table/TableBody';
import { TableEditButton } from '../table/TableEditButton';
import { OrderTableItem } from './OrderTableItem';
import { TableRow } from '../table/TableRow';

// useFetch
// import { GetData } from '../../hooks/useFetch';

const orders = [
  {
    name: 'John Doe',
    orderId: 'demlmdlwe21980swqlml',
    products: [
      {
        id: 'demlmdlwe21980swqlml',
        name: 'Product 1',
      },
      {
        id: 'cdemlmdlwe21980swqwqlml',
        name: 'Product 2',
      },
      {
        id: 'ademlmdlwe21980swqwqqqlml',
        name: 'Product 3',
      },
    ],
    amount: '149',
    status: 'Pending',
  },
  {
    name: 'John Doe',
    orderId: 'demlmdlwe21980swqlml',
    products: [
      {
        id: 'demlmdlwe21980swqlml',
        name: 'Product 1',
      },
      {
        id: 'cdemlmdlwe21980swqwqlml',
        name: 'Product 2',
      },
      {
        id: 'ademlmdlwe21980swqwqqqlml',
        name: 'Product 3',
      },
    ],
    amount: '149',
    status: 'Pending',
  },
  {
    name: 'John Doe',
    orderId: 'demlmdlwe21980swqlml',
    products: [
      {
        id: 'demlmdlwe21980swqlml',
        name: 'Product 1',
      },
      {
        id: 'cdemlmdlwe21980swqwqlml',
        name: 'Product 2',
      },
      {
        id: 'ademlmdlwe21980swqwqqqlml',
        name: 'Product 3',
      },
    ],
    amount: '149',
    status: 'Pending',
  },
  {
    name: 'John Doe',
    orderId: 'demlmdlwe21980swqlml',
    products: [
      {
        id: 'demlmdlwe21980swqlml',
        name: 'Product 1',
      },
      {
        id: 'cdemlmdlwe21980swqwqlml',
        name: 'Product 2',
      },
      {
        id: 'ademlmdlwe21980swqwqqqlml',
        name: 'Product 3',
      },
    ],
    amount: '149',
    status: 'Pending',
  },
];

export const OrderTable = () => {
  // const {
  //   data: orders,
  //   loading,
  //   error,
  //   errorMessage,
  // } = GetData(`${process.env.REACT_APP_SERVER_URL}/orders/getall`);

  // temporära värden, ta bort när fetch mot server implementeras
  const loading = false;
  const error = null;
  const errorMessage = null;

  const tableHeadItems = [
    { id: 1, text: 'Name' },
    { id: 2, text: 'Order ID' },
    { id: 3, text: 'Products' },
    { id: 4, text: 'Amount' },
    { id: 5, text: 'Status' },
  ];

  const changeOrderStatus = (orderId) => {
    alert(`Change status of order ${orderId}`);
  };
  return (
    <>
      <TableWrapper loading={loading} error={error} errorMessage={errorMessage}>
        <TableHead tableHeadItems={tableHeadItems} />

        <TableBody>
          {orders.length > 0 &&
            orders.map((order) => (
              <TableRow key={order._id}>
                <TableItem itemData={order.name} />
                <TableItem itemData={order.orderId} />
                <OrderTableItem order={order} />
                <TableItem itemData={order.amount} />
                <TableItem itemData={order.status} />
                <TableEditButton
                  item={order}
                  text={'Change status'}
                  onClick={changeOrderStatus}
                />
              </TableRow>
            ))}
        </TableBody>
      </TableWrapper>
    </>
  );
};
