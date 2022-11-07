import "./Navbar.css";
import { useState } from "react";
import mobileNavLogo from "../../assets/nav-logo.png";
import navLogo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [navLinksActive, setNavLinksActive] = useState(false);
  const [cartMenuActive, setCartMenuActive] = useState(false);
  const [dropdownMensActive, setDropdownMensActive] = useState(false);
  const [dropdownWomensActive, setDropdownWomensActive] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemSize = useSelector((state) => state.cart.size);

  const toggleSearchBar = () => {
    closeDropdowns();
    setSearchActive(!searchActive);
  };

  const toggleCartMenu = () => {
    setCartMenuActive(!cartMenuActive);
  };

  const closeCartMenu = () => {
    setCartMenuActive(false);
  };

  const toggleNavLinks = () => {
    closeDropdowns();
    setNavLinksActive(!navLinksActive);
  };

  const closeDropdowns = () => {
    setDropdownWomensActive(false);
    setDropdownMensActive(false);
  };

  const toggleDropdown = (e) => {
    closeDropdowns();
    const target = e.target.parentElement;
    const gender = target.getAttribute("data-gender");

    if (gender === "mens") {
      setDropdownMensActive(!dropdownMensActive);
    }
    if (gender === "womens") {
      setDropdownWomensActive(!dropdownWomensActive);
    }
  };

  console.log(cartItems);

  return (
    <nav id="nav">
      <Link to="/">
        <div className="nav__title container">
          <img src={mobileNavLogo} alt="" className="nav__logo--mobile" />
          <img
            src={navLogo}
            alt="Kid Goku making peace sign"
            className="nav__logo"
          />
        </div>
      </Link>

      {/* Nav Links */}
      <ul className={`nav__links ${navLinksActive ? "active" : ""}`}>
        <AiOutlineClose
          className="nav__links__icon nav__links__icon--close"
          onClick={toggleNavLinks}
        />
        <li className="nav__link">NEWEST DROP</li>
        {/* Dropdown Link */}
        <li
          className="nav__link nav__link--with-dropdown"
          data-gender="mens"
          onClick={(e) => toggleDropdown(e)}
        >
          <div
            className="nav__link__label nav__link__label--mens"
            data-gender="mens"
          >
            <p>MENS</p>
            <MdOutlineKeyboardArrowDown
              className={`nav__links__icon nav__links__icon--arrow ${
                dropdownMensActive ? "active" : ""
              }`}
            />
          </div>
          <ul className={`nav__dropdown ${dropdownMensActive ? "active" : ""}`}>
            <li className="nav__link nav__link--dropdown">All</li>
            <li className="nav__link nav__link--dropdown">Tops</li>
            <li className="nav__link nav__link--dropdown">Hoodies</li>
          </ul>
        </li>
        {/* Dropdown Link */}

        <li
          className="nav__link nav__link--with-dropdown"
          data-gender="womens"
          onClick={(e) => toggleDropdown(e)}
        >
          <div
            className="nav__link__label nav__link__label--womens"
            data-gender="womens"
          >
            <p>WOMENS</p>
            <MdOutlineKeyboardArrowDown
              className={`nav__links__icon nav__links__icon--arrow ${
                dropdownWomensActive ? "active" : ""
              }`}
            />
          </div>
          <ul
            className={`nav__dropdown ${dropdownWomensActive ? "active" : ""}`}
          >
            <li className="nav__link nav__link--dropdown">All</li>
            <li className="nav__link nav__link--dropdown">Tops</li>
            <li className="nav__link nav__link--dropdown">Hoodies</li>
          </ul>
        </li>
        <li className="nav__link">ACCESSORIES</li>

        {/* Socials */}
        <ul className="nav__links__socials">
          <li className="nav__links__social">
            <FaFacebookF className="nav__links__icon nav__icon nav__icon--social" />
          </li>
          <li className="nav__links__social">
            <FaTwitter className="nav__links__icon nav__icon--social" />
          </li>
          <li className="nav__links__social">
            <FaInstagram className="nav__links__icon nav__icon--social" />
          </li>
          <li className="nav__links__social">
            <FaTiktok className="nav__links__icon nav__icon--social" />
          </li>
          <li className="nav__links__social">
            <FaYoutube className="nav__links__icon nav__icon--social" />
          </li>
        </ul>
      </ul>

      {/* Icons  */}
      <div className="nav__icons container">
        <CiSearch
          className="nav__icon nav__icon--search"
          onClick={toggleSearchBar}
        />
        <HiOutlineMenuAlt1
          className="nav__icon nav__icon--burger"
          onClick={toggleNavLinks}
        />
        {/* Cart Icon */}
        <div className="cart__icon__container" onClick={toggleCartMenu}>
          <BsCart2 className="nav__icon nav__icon--cart" />
          {cartItems.length > 0 && (
            <span className="cart__item__number">{cartItems.length}</span>
          )}
        </div>
      </div>

      {/* Cart Menu */}
      <div className={`nav__cart__menu ${cartMenuActive && "active"}`}>
        <div className="nav__cart__menu__header">
          <p>Cart</p>
          <AiOutlineClose onClick={closeCartMenu} />
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
        {cartItems.length > 0 && (
          <div className="nav__cart__menu__footer">
            <div className="nav__cart__menu__footer__total__container">
              <p className="nav__cart__menu__footer__total__text">SUBTOTAL</p>
              <p className="nav__cart__menu__footer__total__number">$40.99</p>
            </div>
            <p className="nav__cart__menu__footer__smalltext">
              Shipping, taxes, and discount codes calculated at checkout
            </p>
            <button className="nav__cart__menu__footer__btn">Checkout</button>
          </div>
        )}
      </div>

      {/* Hidden Search */}
      <form className={`nav__search__form ${searchActive ? "active" : ""}`}>
        <CiSearch className="nav__search__input__icon" />
        <input
          type="text"
          placeholder="Search our store"
          className="nav__search__input"
        />
        <AiOutlineClose
          className="nav__search__input__icon"
          onClick={toggleSearchBar}
        />
      </form>
    </nav>
  );
};
