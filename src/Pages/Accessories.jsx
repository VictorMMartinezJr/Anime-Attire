import "./Pages.css";
import { useEffect, useState, useRef } from "react";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";
import { scrollToProducts } from "../components/util/ScrollToProducts";
import { useDispatch, useSelector } from "react-redux";
import { setSearchError } from "../features/search/searchSlice";

const Accessories = () => {
  const [transformedProducts, setTransformedProducts] = useState([]);
  const productsRef = useRef(null);

  const searchQuery = useSelector((state) => state.search.searchQuery);
  const dispatch = useDispatch();

  const { products } = useFetch("data.json");

  const handleSearchQuery = () => {
    let newData = null;
    if (searchQuery) {
      newData = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery)
      );

      if (newData.length === 0) {
        dispatch(setSearchError(true));
        return;
      } else {
        setTransformedProducts(newData);
        dispatch(setSearchError(false));
      }
    }
  };

  useEffect(() => {
    scrollToProducts(productsRef);
    const accessories = products.filter((p) => p.type === "accessory");
    setTransformedProducts(accessories);
    handleSearchQuery();
  }, [products, searchQuery]);

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
