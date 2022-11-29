import "./NoSearchResults.css";
import noResults from "../../assets/no-results.png";

const NoSearchResults = () => {
  return (
    <div className="search__noresults__content container">
      <img
        src={noResults}
        alt="Goku confused"
        className="search__noresults__img"
      />
    </div>
  );
};

export default NoSearchResults;
