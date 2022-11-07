import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return { products };
};

export default useFetch;
