import "./Pages.css";
import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { scrollToTop } from "../components/util/ScrollToTop";

const WomensTees = () => {
  const [title, setTitle] = useState("Womens Tees");
  const [transformedProducts, setTransformedProducts] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  const searchQuery = useSelector((state) => state.search.searchQuery);

  const { products } = useFetch("data.json");

  const toggleFilter = () => {
    setFilterActive(!filterActive);
  };

  const handleFilterClick = (e) => {
    const target = e.target.textContent;
    let newData;

    switch (target) {
      case "All":
        newData = products.filter((p) => p.gender === "womens");
        setTitle("Womens");

        setTransformedProducts(newData);
        break;
      case "Hoodies":
        newData = products.filter(
          (product) => product.gender === "womens" && product.type === "hoodie"
        );
        setTitle("Womens Hoodies");

        setTransformedProducts(newData);
        break;
      case "Tees":
        newData = products.filter(
          (product) => product.gender === "womens" && product.type === "tee"
        );
        setTitle("Womens Tees");

        setTransformedProducts(newData);
        break;
      default:
        break;
    }
    setFilterActive(false);
    return transformedProducts;
  };

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
    scrollToTop();
    const womensTees = products.filter(
      (p) => p.gender === "womens" && p.type === "tee"
    );
    setTransformedProducts(womensTees);
    handleSearchQuery();
  }, [products, searchQuery]);

  return (
    <>
      <Banner />
      <section className="page__container" id="home__section">
        <div className="page__header">
          <h2 className="page__title page__title--mens">{title}</h2>
          <div className="page__filter__container">
            <button className="page__filter__labelbtn" onClick={toggleFilter}>
              <p className="page__filter">Filter</p>
              <MdOutlineKeyboardArrowDown
                className={`page__filter__arrow ${filterActive && "active"}`}
              />
            </button>
            <ul className={`page__filter__options ${filterActive && "active"}`}>
              <button
                className="page__filter__option"
                onClick={handleFilterClick}
              >
                All
              </button>
              <button
                className="page__filter__option"
                onClick={handleFilterClick}
              >
                Tees
              </button>
              <button
                className="page__filter__option"
                onClick={handleFilterClick}
              >
                Hoodies
              </button>
            </ul>
          </div>
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

export default WomensTees;
