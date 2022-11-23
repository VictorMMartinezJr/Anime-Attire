import "./Pages.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../features/cart/cartSlice";
import Quantity from "../components/Quantity/Quantity";
import { scrollToTop } from "../components/util/ScrollToTop";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [activeSize, setActiveSize] = useState("S");
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

  // Fetch product to display
  const fetchProduct = async () => {
    const resp = await fetch("../data.json");
    const data = await resp.json();
    setProduct(data[id - 1]);
  };

  // Add active class to clicked size
  const addActiveSize = (e) => {
    const target = e.target;
    setActiveSize(target.textContent);
    target.classList.add("active");
  };

  // Add product to cart
  const addItemToCart = () => {
    let updatedProduct = {
      ...product,
      size: activeSize,
      qty: quantity,
    };
    dispatch(addtoCart(updatedProduct));
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
            <Quantity
              subtractQuantity={() => {
                if (quantity === 1) {
                  return;
                }
                setQuantity(quantity - 1);
              }}
              addQuantity={() => {
                setQuantity(quantity + 1);
              }}
              quantity={quantity}
            />
          </div>
          <button
            className="page__details__btn__addtocart"
            onClick={addItemToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
