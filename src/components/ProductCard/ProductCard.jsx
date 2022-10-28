import "./ProductCard.css";

const ProductCard = ({ img, title, price }) => {
  return (
    <div className="product__card">
      <img src={img} alt={title} className="product__card__img" />
      <div className="product__card__info">
        <p className="product__card__title">{title}</p>
        <p className="product__card__price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
