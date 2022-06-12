// Refaktorisera denna så att den jobbar mot det nya.

// imports
import * as React from 'react';
import axios from 'axios';

// Get Data
export const GetData = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');
  // const [token, setToken] = React.useState('');

  // const authToken = localStorage.getItem('admin-user-token');
  // console.log(authToken);

  // const config = {
  //   headers: { Authorization: `Basic ${authToken}` },
  // };

  // const params = {};

  React.useEffect(() => {
    setLoading(true);
    axios
      // .get(url, params, config)
      .get(url)
      .then(function (response) {
        // handle success
        setData(response.data);
        setError(false);
      })
      .catch(function (error) {
        // handle error
        setError(error);
        setErrorMessage(error.message);
      })
      .then(function () {
        // always executed
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error, errorMessage };
};

// Create Data
export const CreateData = (url, data) => {
  axios
    .post(url, data)
    .then(function (response) {
      // handle success
      console.log('Success:' + response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log('done');
    });

  return;
};

// Update data
export const UpdateData = (url, data) => {
  axios
    .put(url, data)
    .then(function (response) {
      // handle success
      console.log('Success:' + response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log('done');
    });

  return;
};

// Delete data
export const DeleteData = (url) => {
  axios
    .delete(url)
    .then(function (response) {
      // handle success
      console.log('Success:' + response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log('done');
    });

  return;
};
