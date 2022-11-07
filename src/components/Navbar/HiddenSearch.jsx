import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const HiddenSearch = ({ searchActive, toggleSearchBar }) => {
  return (
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
  );
};

export default HiddenSearch;
