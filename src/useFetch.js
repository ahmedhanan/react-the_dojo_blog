import { useEffect, useState } from 'react';
const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('uh oh! Something went wrong. Try again!');
        }
        return res.json();
      })
      .then((data) => {
        setdata(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== 'Abort') {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
