import * as React from 'react';

// kod från christians swapi repo
const useFetch = (url) => {
  const [result, setResult] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [url]);

  return result;
};

export default useFetch;
