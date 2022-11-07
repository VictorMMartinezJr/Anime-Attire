import "./Navbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Socials = () => {
  return (
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
  );
};

export default Socials;
