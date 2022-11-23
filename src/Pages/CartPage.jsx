import { useSelector } from "react-redux";
import Quantity from "../components/Quantity/Quantity";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../features/cart/cartSlice";
import "./Pages.css";
import { useDispatch } from "react-redux";
import { scrollToTop } from "../components/util/ScrollToTop";
import { useEffect } from "react";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  // Get total of all current items in cart
  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + Number(curr.price * curr.qty);
  }, 0);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className="page__container" id="cartpage__section">
      <div className="cartpage__content container">
        <h1 className="cartpage__title">Your Cart</h1>
        <div className="cartpage__items">
          {cartItems.length > 0 ? (
            cartItems.map((item, i) => {
              return (
                <div key={i} className="cartpage__item">
                  <div className="cartpage__item__info">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="cartpage__item__img"
                    />
                    <div className="cartpage__item__text">
                      <p className="cartpage__item__title">{item.title}</p>
                      <p className="cartpage__item__size">{item.size}</p>
                    </div>
                  </div>
                  <div className="cartpage__item__numbers">
                    <Quantity
                      subtractQuantity={() => {
                        dispatch(decreaseProductQuantity(item));
                      }}
                      addQuantity={() => {
                        dispatch(increaseProductQuantity(item));
                      }}
                      quantity={item.qty}
                    />
                    <p className="cartpage__item__price">${item.price}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="cartpage__empty__cart__h2">Your cart is empty</h2>
          )}
        </div>
        <div className="cartpage__footer">
          <div className="cartpage__footer__total__container">
            <p className="cartpage__footer__total__text">SUBTOTAL</p>
            <p className="cartpage__footer__total__number">
              ${cartTotal.toFixed(2)}
            </p>
          </div>
          <p className="nav__cart__menu__footer__smalltext">
            Shipping, taxes, and discount codes calculated at checkout
          </p>
          <button className="cartpage__footer__btn">Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
