// imports
import * as React from 'react';
import axios from 'axios';

// components
import { EditUserForm } from '../forms/EditUserForm';

export const EditUser = ({ user, closeModal }) => {
  const [userDeleted, setUserDeleted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  console.log(user._id);

  const deleteUser = () => {
    setUserDeleted(true);
    const authToken = localStorage.getItem('admin-user-token');
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/user/${user._id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        // handle success
        setUserDeleted(true);
      })
      .catch(function (error) {
        // handle error
        setError(true);
        setErrorMessage(error.message);
      })
      .then(function () {
        // always executed
        if (userDeleted) {
          setError(false);
        }

        if (error) {
          setUserDeleted(false);
        }
      });
    return;
  };
  return (
    <div>
      {!userDeleted && (
        <>
          <EditUserForm user={user} />
          <button
            onClick={deleteUser}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 mt-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
          >
            Delete User
          </button>
        </>
      )}
      {userDeleted && (
        <>
          <h2>The user was deleted sucessfully</h2>
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </>
      )}
      {error && <p>{errorMessage}</p>}
    </div>
  );
};
