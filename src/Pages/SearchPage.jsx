import "./Pages.css";
import { useEffect, useState, useRef } from "react";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { scrollToProducts } from "../components/util/ScrollToProducts";
import { setSearchError } from "../features/search/searchSlice";
import NoSearchResults from "../components/NoSearchResults/NoSearchResults";

const SearchPage = () => {
  const searchQuery = JSON.parse(localStorage.getItem("searchQuery"));
  const [title] = useState(searchQuery);
  const [transformedProducts, setTransformedProducts] = useState([]);
  const resultsRef = useRef(null);

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

  const productsExist = () => {
    return transformedProducts.length > 0 ? true : false;
  };

  useEffect(() => {
    scrollToProducts(resultsRef);
    handleSearchQuery();
  }, [products, searchQuery]);

  return (
    <>
      <Banner />
      <section className="page__container" id="search__section">
        <div className="page__header">
          <h2 className="page__title page__title--mens" ref={resultsRef}>
            {productsExist() ? title : "No Results"}
          </h2>
        </div>
        {/* Products */}
        <div
          className={`page__products ${
            productsExist() ? "" : "search__noresults"
          }`}
        >
          {productsExist() ? (
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
            })
          ) : (
            <NoSearchResults />
          )}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
