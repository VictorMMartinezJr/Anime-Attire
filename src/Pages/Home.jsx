import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";
import "./Pages.css";

const Home = () => {
  const [transformedProducts, setTransformedProducts] = useState([]);

  const searchQuery = useSelector((state) => state.search.searchQuery);

  const { products } = useFetch("data.json");

  const handleSearchQuery = () => {
    let newData = null;
    if (searchQuery) {
      newData = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery)
      );
      setTransformedProducts(newData);
    }
  };

  useEffect(() => {
    setTransformedProducts(products);
    handleSearchQuery();
  }, [products, searchQuery]);

  return (
    <>
      <Banner />
      <section className="page__container" id="home__section">
        <h2 className="page__title">The 2022 Summer Collection</h2>
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

export default Home;
