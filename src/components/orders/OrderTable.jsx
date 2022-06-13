// imports
import * as React from 'react';

// components
import { TableItem } from '../table/TableItem';
import { TableHead } from '../table/TableHead';
import { TableWrapper } from '../table/TableWrapper';
import { TableBody } from '../table/TableBody';
import { TableEditButton } from '../table/TableEditButton';
import { TableRow } from '../table/TableRow';

// useFetch
// import { GetData } from '../../hooks/useFetch';

export const OrderTable = () => {
  const [orders, setOrders] = React.useState([]);

  // temporära värden, refaktorisera om koden till att sätta dessa dynamiskt
  const loading = false;
  const error = null;
  const errorMessage = null;

  const tableHeadItems = [
    { id: 1, text: 'Name' },
    { id: 2, text: 'Order ID' },
    { id: 4, text: 'Amount' },
    { id: 5, text: 'Status' },
  ];

  const changeOrderStatus = (orderId) => {
    alert(`Change status of order ${orderId}`);
  };

  React.useEffect(() => {
    const getUserData = async () => {
      const authToken = localStorage.getItem('admin-user-token');
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_API}/order`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = await response.json();
      setOrders(data);
    };
    getUserData();
  }, []);
  // console.log(orders[0].products);
  return (
    <>
      <TableWrapper loading={loading} error={error} errorMessage={errorMessage}>
        <TableHead tableHeadItems={tableHeadItems} />

        <TableBody>
          {orders.length > 0 &&
            orders.map((order) => (
              <TableRow key={order._id}>
                <TableItem itemData={order.name} />
                <TableItem itemData={order._id} />
                {/* <OrderTableItem order={order} /> */}
                <TableItem itemData={order.total} />
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
