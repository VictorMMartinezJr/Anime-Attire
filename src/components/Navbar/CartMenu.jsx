import "./Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../../features/cart/cartSlice";
import Quantity from "../Quantity/Quantity";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartMenu = ({ cartOpen, toggleCartMenu, cartItems }) => {
  const dispatch = useDispatch();

  // Get total of all current items in cart
  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + Number(curr.price * curr.qty);
  }, 0);

  return (
    <div className={`nav__cart__menu ${cartOpen && "active"}`}>
      <div className="nav__cart__menu__header">
        <p>Cart</p>
        <AiOutlineClose
          onClick={toggleCartMenu}
          className="nav__cart__menu__closeicon"
        />
      </div>
      {cartItems.length > 0 ? (
        <ul
          className="nav__cart__menu__items"
          tabIndex={cartItems.length > 0 ? 0 : -1}
        >
          {cartItems.map((item, i) => {
            return (
              <li
                key={i}
                className="nav__cart__menu__item"
                aria-label={`${item.title} size ${item.size} price ${item.price} quantity ${item.qty} `}
              >
                <img src={item.img} alt="" className="nav__cart__menu__img" />
                <div className="nav__cart__menu__info">
                  <p className="nav__cart__menu__title">{item.title}</p>
                  <p className="nav__cart__menu__size">{item.size}</p>
                  <div className="nav__cart__menu__price__container">
                    <Quantity
                      subtractQuantity={() => {
                        dispatch(decreaseProductQuantity(item));
                      }}
                      addQuantity={() => {
                        dispatch(increaseProductQuantity(item));
                      }}
                      quantity={item.qty}
                      itemName={item.title}
                      itemSize={item.size}
                    />
                    <p className="nav__cart__menu__price">${item.price}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="nav__cart__menu__emptytext">Cart is empty</p>
      )}

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="nav__cart__menu__footer">
          <div className="nav__cart__menu__footer__total__container">
            <p className="nav__cart__menu__footer__total__text">SUBTOTAL</p>
            <p className="nav__cart__menu__footer__total__number">
              ${cartTotal.toFixed(2)}
            </p>
          </div>
          <p className="nav__cart__menu__footer__smalltext">
            Shipping, taxes, and discount codes calculated at checkout
          </p>
          <Link
            to="/cart"
            className="nav__cart__menu__footer__link"
            onClick={toggleCartMenu}
          >
            <button className="nav__cart__menu__footer__btn" tabIndex={-1}>
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartMenu;
