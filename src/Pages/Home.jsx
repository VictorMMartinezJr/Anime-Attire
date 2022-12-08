import "./Pages.css";
import { useEffect, useState } from "react";
import { scrollToTop } from "../components/util/ScrollToTop";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const Home = () => {
  const [transformedProducts, setTransformedProducts] = useState([]);

  const { products, error } = useFetch("data.json");

  useEffect(() => {
    scrollToTop();
    setTransformedProducts(products);
  }, [products]);

  return (
    <>
      <Banner />
      <section className="page__container" id="home__section">
        <h2 className="page__title">The 2022 Summer Collection</h2>
        {/* Error message */}
        {error && <ErrorMessage message={error} />}
        {/* Products */}
        <div className="page__products">
          {transformedProducts &&
            !error &&
            transformedProducts.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Home;
