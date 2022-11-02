import "./Pages.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [activeSize, setActiveSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sizeData = [
    {
      id: 1,
      size: "S",
    },
    {
      id: 2,
      size: "M",
    },
    {
      id: 3,
      size: "L",
    },
    {
      id: 4,
      size: "XL",
    },
    {
      id: 5,
      size: "XXL",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const fetchProduct = async () => {
    const resp = await fetch("../data.json");
    const data = await resp.json();

    setProduct(data[id - 1]);
  };

  const addActiveSize = (e) => {
    const target = e.target;
    setActiveSize(target.textContent);
    target.classList.add("active");
  };

  // Update Quantity Functions
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subtractQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    scrollToTop();
    fetchProduct();
  }, []);

  return (
    <div className="page__container" id="details__page">
      <div className="details__page__content">
        <img
          src={product.img}
          alt={product.title}
          className="details__page__img"
        />
        <div className="details__page__product">
          <div className="details__page__productinfo ">
            <h1 className="details__page__title">{product.title}</h1>
            <p className="details__page__price">${product.price}</p>
          </div>
          <div className="details__page__sizes" onClick={addActiveSize}>
            {sizeData.map((s) => {
              return (
                <button
                  key={s.id}
                  className={
                    activeSize === s.size
                      ? "details__page__size active"
                      : "details__page__size"
                  }
                  onClick={addActiveSize}
                >
                  {s.size}
                </button>
              );
            })}
          </div>

          <div className="page__details__quantity__container">
            <p className="page__details__quanitity__label">QUANTITY</p>
            <div className="page__details__quantity__actions">
              <button
                className="page__details__quantity__btn"
                onClick={subtractQuantity}
              >
                -
              </button>
              <p className="page__details__quantity__number">{quantity}</p>
              <button
                className="page__details__quantity__btn page__details__quantity__btn--plus"
                onClick={addQuantity}
              >
                +
              </button>
            </div>
          </div>
          <button className="page__details__btn__addtocart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
