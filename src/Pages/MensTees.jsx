import "./Pages.css";
import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";
import { scrollToProducts } from "../components/util/ScrollToProducts";
import PageHeader from "../components/PageHeader";

const MensTees = () => {
  const [title, setTitle] = useState("Mens Tees");
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
        newData = products.filter((p) => p.gender === "mens");
        setTitle("Mens");
        setTransformedProducts(newData);
        break;
      case "Hoodies":
        newData = products.filter(
          (product) => product.gender === "mens" && product.type === "hoodie"
        );
        setTitle("Mens Hoodies");

        setTransformedProducts(newData);
        break;
      case "Tees":
        newData = products.filter(
          (product) => product.gender === "mens" && product.type === "tee"
        );
        setTitle("Mens Tees");

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
    const mensTees = products.filter(
      (p) => p.gender === "mens" && p.type === "tee"
    );
    setTransformedProducts(mensTees);
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

export default MensTees;
