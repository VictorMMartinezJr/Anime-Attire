import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Pages.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const resp = await fetch("data.json");
    const data = await resp.json();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="page__container" id="home__section">
      <h2 className="page__title">The 2022 Summer Collection</h2>
      <div className="page__products">
        {products &&
          products.map((product, i) => {
            return (
              <ProductCard
                key={i}
                img={product.img}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Home;
