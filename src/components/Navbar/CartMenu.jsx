import "./Navbar.css";
import { AiOutlineClose } from "react-icons/ai";

const CartMenu = ({ cartMenuActive, setCartMenuActive, cartItems }) => {
  const closeCartMenu = () => {
    setCartMenuActive(false);
  };

  // Get total of all current items in cart
  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + Number(curr.price);
  }, 0);

  return (
    <div className={`nav__cart__menu ${cartMenuActive && "active"}`}>
      <div className="nav__cart__menu__header">
        <p>Cart</p>
        <AiOutlineClose
          onClick={closeCartMenu}
          className="nav__cart__menu__closeicon"
        />
      </div>
      {cartItems.length > 0 ? (
        <ul className="nav__cart__menu__items">
          {cartItems.map((item, i) => {
            return (
              <li key={i} className="nav__cart__menu__item">
                <img src={item.img} alt="" className="nav__cart__menu__img" />
                <div className="nav__cart__menu__info">
                  <p className="nav__cart__menu__title">{item.title}</p>
                  <p className="nav__cart__menu__size">{item.size}</p>
                  <p className="nav__cart__menu__price">${item.price}</p>
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
          <button className="nav__cart__menu__footer__btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartMenu;
