import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { filterBySearch } from "../../features/search/searchSlice";
import { useEffect } from "react";

const HiddenSearch = ({ searchActive, toggleSearchBar }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const inputField = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      return;
    }
    dispatch(filterBySearch(searchTerm));
    location.assign(`/search`);
    setSearchTerm("");
  };

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear Input Text
  const handleClearInputText = () => {
    setSearchTerm("");
    inputField.current.focus();
  };

  useEffect(() => {
    if (searchActive) {
      searchActive && inputField.current.focus();
    }
  }, [searchActive]);

  return (
    <form
      className={`nav__search__form ${searchActive && "active"}`}
      onSubmit={(e) => handleSubmit(e)}
      tabIndex={-1}
      focusable={false}
    >
      <div className="nav__search__form__content">
        <button
          className="nav__search__form__submitbtn"
          type="submit"
          tabIndex={-1}
          onClick={() => dispatch(filterBySearch(searchTerm))}
        >
          <CiSearch className="nav__search__input__icon" focusable={false} />
        </button>
        <div className="nav__search__input__container">
          {/* input */}
          <input
            type="text"
            placeholder="Search our store"
            className="nav__search__input"
            tabIndex={-1}
            value={searchTerm}
            onChange={updateSearchTerm}
            ref={inputField}
          />
          {/* clear text icon */}
          {searchTerm !== "" && (
            <span
              className="nav__search__input__cleartext"
              onClick={handleClearInputText}
            >
              X
            </span>
          )}
          {/* error text */}
          <p className="nav__search__input__errortext">No results found</p>
        </div>
        <AiOutlineClose className="nav__search__input__icon" />
      </div>
    </form>
  );
};

export default HiddenSearch;
