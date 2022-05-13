// imports
import * as React from 'react';
import axios from 'axios';

// Get Data
export const GetData = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    axios
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
        console.log('done');
      });
  }, [url]);

  return { data, loading, error, errorMessage };
};

// Create Data
export const CreateData = (url, data) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    axios
      .post(url, data)
      .then(function (response) {
        // handle success
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
        console.log('done');
      });
  }, [url, data]);

  return { loading, error, errorMessage };
};

// Update data
export const UpdateData = (url, data) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    axios
      .put(url, data)
      .then(function (response) {
        // handle success
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
        console.log('done');
      });
  }, [url, data]);

  return { loading, error, errorMessage };
};

// Delete data
export const DeleteData = (url) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    axios
      .delete(url)
      .then(function (response) {
        // handle success
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
        console.log('done');
      });
  }, [url]);

  return { loading, error, errorMessage };
};
