// imports
import * as React from 'react';
import axios from 'axios';

// components
import { EditProductForm } from '../forms/EditProductForm';

export const EditProduct = ({ product, closeModal }) => {
  const [productDeleted, setProductDeleted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const deleteProduct = () => {
    const authToken = localStorage.getItem('admin-user-token');
    setProductDeleted(true);
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/product/${product._id}`, 
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        // handle success
        setProductDeleted(true);
      })
      .catch(function (error) {
        // handle error
        setError(true);
        setErrorMessage(error.message);
      })
      .then(function () {
        // always executed
        if (productDeleted) {
          setError(false);
        }

        if (error) {
          setProductDeleted(false);
        }
      });
    return;
  };
  return (
    <div>
      {!productDeleted && (
        <>
          <EditProductForm product={product} />
          <button
            onClick={deleteProduct}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 mt-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
          >
            Delete product
          </button>
        </>
      )}
      {productDeleted && (
        <>
          <h2>The product was deleted sucessfully</h2>
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </>
      )}
      {error && <p>{errorMessage}</p>}
    </div>
  );
};
