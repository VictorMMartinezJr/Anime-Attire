import "./Footer.css";
import { useState } from "react";
import navLogo from "../../assets/footer-logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };
  return (
    <footer id="footer">
      <div className="footer__content container">
        <ul className="footer__links" onClick={toggleDropdown}>
          <div className="footer__links__label">
            <p>Main Menu</p>
            <MdOutlineKeyboardArrowDown
              className={`nav__links__icon nav__links__icon--footer nav__links__icon--arrow ${
                dropdownActive ? "active" : ""
              }`}
            />
          </div>
          <ul className={`footer__dropdown ${dropdownActive ? "active" : ""}`}>
            <li className="footer__dropdown__link">NEWEST DROP</li>
            <li className="footer__dropdown__link">MENS</li>
            <li className="footer__dropdown__link">WOMENS</li>
            <li className="footer__dropdown__link">ACCESSORIES</li>
          </ul>
        </ul>
        <div className="footer__socials__container">
          <img
            src={navLogo}
            alt="Kid Goku making peace sign"
            className="footer__logo"
          />
          <ul className="nav__links__socials footer__nav__socials">
            <li className="nav__links__social">
              <FaFacebookF className="nav__links__icon nav__icon nav__icon--social nav__icon--footer" />
            </li>
            <li className="nav__links__social">
              <FaTwitter className="nav__links__icon nav__icon--social nav__icon--footer" />
            </li>
            <li className="nav__links__social">
              <FaInstagram className="nav__links__icon nav__icon--social nav__icon--footer" />
            </li>
            <li className="nav__links__social">
              <FaTiktok className="nav__links__icon nav__icon--social nav__icon--footer" />
            </li>
            <li className="nav__links__social">
              <FaYoutube className="nav__links__icon nav__icon--social nav__icon--footer" />
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">© 2022 VictorMtzCodes</div>
      </div>
    </footer>
  );
};

export default Footer;
