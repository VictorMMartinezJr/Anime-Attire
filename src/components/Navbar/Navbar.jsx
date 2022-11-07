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
import CartMenu from "./CartMenu";
import HiddenSearch from "./HiddenSearch";

export const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [navLinksActive, setNavLinksActive] = useState(false);
  const [cartMenuActive, setCartMenuActive] = useState(false);
  const [dropdownMensActive, setDropdownMensActive] = useState(false);
  const [dropdownWomensActive, setDropdownWomensActive] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const toggleSearchBar = () => {
    closeDropdowns();
    setSearchActive(!searchActive);
  };

  // Toggle cart menu
  const toggleCartMenu = () => {
    setCartMenuActive(!cartMenuActive);
  };

  // Toggle navLinks & dropdowns
  const toggleNavLinks = () => {
    closeDropdowns();
    setNavLinksActive(!navLinksActive);
  };
  const closeNavLinks = () => {
    closeDropdowns();
    setNavLinksActive(false);
  };

  const closeDropdowns = () => {
    setDropdownWomensActive(false);
    setDropdownMensActive(false);
  };

  const toggleDropdown = (e) => {
    closeDropdowns();
    const target = e.target.parentElement;
    const gender = target.getAttribute("data-gender");
    console.log("Ran");

    console.log(target);
    if (gender === "mens") {
      setDropdownMensActive(!dropdownMensActive);
    }
    if (gender === "womens") {
      setDropdownWomensActive(!dropdownWomensActive);
    }
  };

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
        {/* Link 1 */}
        <li className="nav__link">NEWEST DROP</li>

        {/* Mens Links */}
        {/* Dropdown Link */}
        <li className="nav__link nav__link--with-dropdown" data-gender="mens">
          <div
            className="nav__link__label nav__link__label--mens"
            data-gender="mens"
            onClick={(e) => toggleDropdown(e)}
          >
            <p>MENS</p>
            <MdOutlineKeyboardArrowDown
              className={`nav__links__icon nav__links__icon--arrow ${
                dropdownMensActive ? "active" : ""
              }`}
            />
          </div>
          <ul className={`nav__dropdown ${dropdownMensActive ? "active" : ""}`}>
            {/* Dropdown Link 1 */}
            <Link to="/mens" className="router__link" onClick={closeNavLinks}>
              <li className="nav__link nav__link--dropdown">All</li>
            </Link>
            {/* Dropdown Link 2 */}
            <Link
              to="/mens-tees"
              className="router__link"
              onClick={closeNavLinks}
            >
              <li className="nav__link nav__link--dropdown">Tees</li>
            </Link>
            {/* Dropdown Link 3 */}
            <Link
              to="/mens-hoodies"
              className="router__link"
              onClick={closeNavLinks}
            >
              <li className="nav__link nav__link--dropdown">Hoodies</li>
            </Link>
          </ul>
        </li>
        {/* Womens Links */}
        {/* Dropdown Link */}
        <li className="nav__link nav__link--with-dropdown" data-gender="womens">
          <div
            className="nav__link__label nav__link__label--womens"
            data-gender="womens"
            onClick={(e) => toggleDropdown(e)}
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
            {/* Dropdown Link 1 */}
            <Link to="/womens" className="router__link" onClick={closeNavLinks}>
              <li className="nav__link nav__link--dropdown">All</li>
            </Link>
            {/* Dropdown Link 2 */}
            <Link
              to="/womens-tees"
              className="router__link"
              onClick={closeNavLinks}
            >
              <li className="nav__link nav__link--dropdown">Tees</li>
            </Link>
            {/* Dropdown Link 3 */}
            <Link
              to="/womens-hoodies"
              className="router__link"
              onClick={closeNavLinks}
            >
              <li className="nav__link nav__link--dropdown">Hoodies</li>
            </Link>
          </ul>
        </li>

        {/* Link 4 */}
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
      <CartMenu
        cartMenuActive={cartMenuActive}
        setCartMenuActive={setCartMenuActive}
        cartItems={cartItems}
      />

      {/* Hidden Search */}
      <HiddenSearch
        searchActive={searchActive}
        toggleSearchBar={toggleSearchBar}
      />
    </nav>
  );
};
