import "./Pages.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, toggleCart } from "../features/cart/cartSlice";
import { scrollToTop } from "../components/util/ScrollToTop";
import Quantity from "../components/Quantity/Quantity";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [oneSizeProduct, setOneSizeProduct] = useState(false);
  const [activeSize, setActiveSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  const cartItems = useSelector((state) => state.cart.cartItems);

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

  // Check if item is an accessory
  const handleAccessoryProduct = (product) => {
    if (product.type === "accessory") {
      setOneSizeProduct(true);
      setActiveSize("");
    } else {
      return;
    }
  };

  // Fetch product to display
  const fetchProduct = async () => {
    const resp = await fetch("../data.json");
    const data = await resp.json();
    const product = data.filter((p) => p.id == id);
    setProduct(product[0]);
    handleAccessoryProduct(product[0]);
  };

  // Add active class to clicked size
  const addActiveSize = (e) => {
    const target = e.target;
    setActiveSize(target.textContent);
    target.classList.add("active");
  };

  // Add product to cart
  const addItemToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      let updatedProduct = {
        ...product,
        size: activeSize,
        qty: quantity,
      };
      dispatch(addtoCart(updatedProduct));
      scrollToTop();
      setIsLoading(false);
      dispatch(toggleCart());
    }, 1000);
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
            {!oneSizeProduct ? (
              sizeData.map((s) => {
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
              })
            ) : (
              <button
                className="details__page__size active"
                onClick={addActiveSize}
              >
                One Size
              </button>
            )}
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
              itemName={product.title}
              itemSize={activeSize}
            />
          </div>
          <button
            className="page__details__btn__addtocart"
            onClick={addItemToCart}
            disabled={isLoading}
          >
            {isLoading ? "Adding" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
