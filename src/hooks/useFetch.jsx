import * as React from 'react';

// kod från christians swapi repo
export const useFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async (url) => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData(url);
  }, [url]);

  return { data, loading, error };
};
