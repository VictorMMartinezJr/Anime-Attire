import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBySearch } from "../../features/search/searchSlice";

const HiddenSearch = ({ searchActive, toggleSearchBar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const dispatch = useDispatch();

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterBySearch(searchTerm));
    console.log("searchQuery", searchQuery);
  };
  return (
    <form
      className={`nav__search__form ${searchActive ? "active" : ""}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <button
        type="submit"
        onClick={() => dispatch(filterBySearch(searchTerm))}
      >
        <CiSearch className="nav__search__input__icon" />
      </button>
      <input
        type="text"
        placeholder="Search our store"
        className="nav__search__input"
        value={searchTerm}
        onChange={updateSearchTerm}
      />
      <AiOutlineClose
        className="nav__search__input__icon"
        onClick={toggleSearchBar}
      />
    </form>
  );
};

export default HiddenSearch;
