import "./Quantity.css";

const Quantity = ({
  subtractQuantity,
  addQuantity,
  quantity,
  itemName,
  itemSize,
}) => {
  return (
    <div className="page__details__quantity__actions">
      <button
        className="page__details__quantity__btn"
        aria-label={`Decrease quantity of ${itemName} size ${itemSize} by 1`}
        onClick={subtractQuantity}
      >
        -
      </button>
      <p className="page__details__quantity__number">{quantity}</p>
      <button
        className="page__details__quantity__btn page__details__quantity__btn--plus"
        aria-label={`Increase quantity of ${itemName} size ${itemSize} by 1`}
        onClick={addQuantity}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
