// imports
import * as React from 'react';

// components
import { TableItem } from '../table/TableItem';
import { TableHead } from '../table/TableHead';
import { TableWrapper } from '../table/TableWrapper';
import { TableBody } from '../table/TableBody';
import { TableEditButton } from '../table/TableEditButton';
import { TableRow } from '../table/TableRow';
import { UpdateOrder } from './UpdateOrder';

// useFetch
// import { GetData } from '../../hooks/useFetch';
import { useLockScroll } from '../../hooks/useLockScroll';

// utils
import { Modal } from '../../utils/Modal';

// helpers
import { ReloadPage } from '../../helpers/ReloadPage';

export const OrderTable = () => {
  const [orders, setOrders] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [activeOrder, setActiveOrder] = React.useState(null);

  const { unlockScroll } = useLockScroll();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    unlockScroll();
    // halvdan lösning för att refetcha sidan
    ReloadPage();
  };

  const editOrder = (order) => {
    console.log('Banana');
    setActiveOrder(order);
    openModal();
  };

  const modalContent = () => {
    return (
      <>
        <UpdateOrder order={activeOrder} closeModal={closeModal} />
      </>
    );
  };

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
                <TableItem itemData={order.total} />
                <TableItem itemData={order.status} />

                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button
                    onClick={() => editOrder(order)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit order
                  </button>
                </td>
              </TableRow>
            ))}
        </TableBody>
      </TableWrapper>
      {showModal && (
        <Modal
          closeModal={closeModal}
          modalTitle="Edit Order"
          children={<>{modalContent()}</>}
        />
      )}
    </>
  );
};
