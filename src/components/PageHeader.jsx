import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const PageHeader = ({
  productRef,
  title,
  toggleFilter,
  filterActive,
  handleFilterClick,
}) => {
  return (
    <div className="page__header">
      <h2 className="page__title page__title--mens" ref={productRef}>
        {title}
      </h2>
      <div className="page__filter__container">
        <button className="page__filter__labelbtn" onClick={toggleFilter}>
          <p className="page__filter">Filter</p>
          <MdOutlineKeyboardArrowDown
            className={`page__filter__arrow ${filterActive && "active"}`}
          />
        </button>
        <ul className={`page__filter__options ${filterActive && "active"}`}>
          <button className="page__filter__option" onClick={handleFilterClick}>
            All
          </button>
          <button className="page__filter__option" onClick={handleFilterClick}>
            Tees
          </button>
          <button className="page__filter__option" onClick={handleFilterClick}>
            Hoodies
          </button>
        </ul>
      </div>
    </div>
  );
};

export default PageHeader;
