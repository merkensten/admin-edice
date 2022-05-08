import * as React from 'react';

// Behöver fixa in bättre error hantering

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
