// imports
import * as React from 'react';
import axios from 'axios';

// components
import { UpdateOrderBtn } from './UpdateOrderBtn';

export const UpdateOrder = ({ order, closeModal }) => {
  const [orderDeleted, setOrderDeleted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [orderStatus, setOrderStatus] = React.useState(order.status);
  const [orderId] = React.useState(order._id);
  // form state
  const [orderUpdateSucess, setOrderUpdateSucess] = React.useState(false);
  const [orderUpdateError, setOrderUpdateError] = React.useState(false);
  const [orderUpdateErrorMessage, setOrderUpdateErrorMessage] =
    React.useState('');
  console.log(order);

  // funktion för att uppdatera orderStatus
  const changeOrderStatus = (newOrderStatus) => {
    setOrderStatus(newOrderStatus);
  };

  const deleteOrder = () => {
    setOrderDeleted(true);
    const authToken = localStorage.getItem('admin-user-token');
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/order/${order._id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        // handle success
        setOrderDeleted(true);
      })
      .catch(function (error) {
        // handle error
        setError(true);
        setErrorMessage(error.message);
      })
      .then(function () {
        // always executed
        if (orderDeleted) {
          setError(false);
        }

        if (error) {
          setOrderDeleted(false);
        }
      });
    return;
  };

  // funktion för att skicka in userObjektet till databasen
  // Behöver skapa en lösning i backend för att bara uppdatera order status via en patch.
  const updateDataWithAxios = (order) => {
    const authToken = localStorage.getItem('admin-user-token');

    axios
      .put(`${process.env.REACT_APP_SERVER_API}/order/${orderId}`, order, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        // handle success
        setOrderUpdateSucess(true);
      })
      .catch(function (error) {
        // handle error
        setOrderUpdateError(true);
        setOrderUpdateErrorMessage(error.message);
        console.log(error);
      })
      .then(function () {
        // always executed
        if (orderUpdateSucess) {
          setOrderUpdateError(false);
        }

        if (orderUpdateError) {
          setOrderUpdateSucess(false);
        }
      });
    return;
  };

  // funktionen som körs när formuläret submittas
  const updateOrderHandler = (event) => {
    event.preventDefault();

    const updatedOrder = {
      status: orderStatus,
      address: order.address,
      city: order.city,
      zipcode: order.zipcode,
      phone: order.phone,
      email: order.email,
      name: order.name,
      total: order.total,
      products: order.products,
      _id: order._id,
    };

    console.log(updatedOrder);

    updateDataWithAxios(updatedOrder);

    return;
  };

  return (
    <div>
      {/* {orderUpdateSucess && (<h2>The Order was updated sucessfully</h2>)} */}
      {orderUpdateSucess && (
        <>
          <h2>The order was updated sucessfully</h2>
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </>
      )}
      {orderUpdateError && (
        <>
          <h2>Something went wrong</h2>
          <p>{orderUpdateErrorMessage}</p>
        </>
      )}
      {!orderDeleted && !orderUpdateSucess && (
        <>
          <div className="mb-8 border-solid border-2 border-gray-200 py-8 px-4 rounded-lg">
            <div className="flex mb-4">
              <h3 className="text-lg">
                Current order status for {order._id}:{' '}
              </h3>
              <p className="ml-4 text-lg font-bold">{order.status}</p>
            </div>
            <div>
              <h3 className="text-2xl">Change order status: </h3>
              <div className="flex gap-2">
                <UpdateOrderBtn
                  onClickHandler={changeOrderStatus}
                  btnText="Ordered"
                />
                <UpdateOrderBtn
                  onClickHandler={changeOrderStatus}
                  btnText="Packed"
                />
                <UpdateOrderBtn
                  onClickHandler={changeOrderStatus}
                  btnText="Sent"
                />
                <UpdateOrderBtn
                  onClickHandler={changeOrderStatus}
                  btnText="Delivered"
                />
                <UpdateOrderBtn
                  onClickHandler={changeOrderStatus}
                  btnText="Cancelled"
                />
              </div>

              {/* <p className="mt-4 text-lg">
                Changed order status: {orderStatus}
              </p> */}

              <button
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 mt-6 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                onClick={updateOrderHandler}
              >
                Update Order Status to {orderStatus}
              </button>
            </div>
          </div>
          <button
            onClick={deleteOrder}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 mt-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
          >
            Delete Order
          </button>
        </>
      )}
      {orderDeleted && (
        <>
          <h2>The order was deleted sucessfully</h2>
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </>
      )}
      {error && <p>{errorMessage}</p>}
    </div>
  );
};
