import { useState, useEffect } from 'react';

function useFetch(url) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItem(data);
      });
  }, [url]);

  return item;
}

export default useFetch;
