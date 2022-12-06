import "./Pages.css";
import { useEffect, useState, useRef } from "react";
import { scrollToProducts } from "../components/util/ScrollToProducts";
import NoSearchResults from "../components/NoSearchResults/NoSearchResults";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";

const SearchPage = () => {
  const searchQuery = JSON.parse(localStorage.getItem("searchQuery"));
  const [title] = useState(searchQuery);
  const [transformedProducts, setTransformedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const resultsRef = useRef(null);

  const { products } = useFetch("data.json");

  const upperCaseTitle = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleSearchQuery = () => {
    let newData = null;
    if (searchQuery) {
      newData = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setTransformedProducts(newData);
    }
    setIsLoading(false);
  };

  const productsExist = () => {
    return transformedProducts.length > 0 ? true : false;
  };

  useEffect(() => {
    scrollToProducts(resultsRef);
    handleSearchQuery();
    document.activeElement.blur();
  }, [products, searchQuery]);

  return (
    <>
      <Banner />
      <section className="page__container" id="search__section">
        <div className="page__header">
          <h2 className="page__title page__title--mens" ref={resultsRef}>
            {productsExist() && !isLoading && upperCaseTitle(title)}
            {!productsExist() && !isLoading && "No Results"}
            {isLoading && upperCaseTitle(title)}
          </h2>
        </div>
        {/* Products */}
        {isLoading && <div>Loading...</div>}
        <div
          className={`page__products ${
            productsExist() ? "" : "search__noresults"
          }`}
        >
          {productsExist() &&
            !isLoading &&
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
          {!isLoading && !productsExist() && <NoSearchResults />}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
