import "./Pages.css";
import { useEffect, useState, useRef } from "react";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";
import { scrollToProducts } from "../components/util/ScrollToProducts";

const Accessories = () => {
  const [transformedProducts, setTransformedProducts] = useState([]);
  const productsRef = useRef(null);

  const { products } = useFetch("data.json");

  useEffect(() => {
    scrollToProducts(productsRef);
    const accessories = products.filter((p) => p.type === "accessory");
    setTransformedProducts(accessories);
  }, [products]);

  return (
    <>
      <Banner />
      <section className="page__container" id="home__section">
        <div className="page__header">
          <h2 className="page__title page__title--mens" ref={productsRef}>
            Accessories
          </h2>
        </div>
        {/* Products */}
        <div className="page__products">
          {transformedProducts &&
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

export default Accessories;
