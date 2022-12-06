import "./Pages.css";
import { useEffect, useRef, useState } from "react";
import { scrollToProducts } from "../components/util/ScrollToProducts";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";
import PageHeader from "../components/PageHeader";

const WomensHoodies = () => {
  const [title, setTitle] = useState("Womens Hoodies");
  const [transformedProducts, setTransformedProducts] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const productsRef = useRef(null);

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

  useEffect(() => {
    scrollToProducts(productsRef);
    const womensHoodies = products.filter(
      (p) => p.gender === "womens" && p.type === "hoodie"
    );
    setTransformedProducts(womensHoodies);
    document.activeElement.blur();
  }, [products]);

  return (
    <>
      <Banner />
      <section className="page__container" id="home__section">
        <PageHeader
          productRef={productsRef}
          title={title}
          toggleFilter={toggleFilter}
          filterActive={filterActive}
          handleFilterClick={handleFilterClick}
        />
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

export default WomensHoodies;
