import "./Quantity.css";

const Quantity = ({ subtractQuantity, addQuantity, quantity }) => {
  return (
    <div className="page__details__quantity__actions">
      <button
        className="page__details__quantity__btn"
        onClick={subtractQuantity}
      >
        -
      </button>
      <p className="page__details__quantity__number">{quantity}</p>
      <button
        className="page__details__quantity__btn page__details__quantity__btn--plus"
        onClick={addQuantity}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
