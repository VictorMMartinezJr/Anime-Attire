import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      if (error) {
        setError(false);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return { products, error };
};

export default useFetch;
