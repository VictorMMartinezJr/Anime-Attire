import "./ProductCard.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = ({ id, img, title, price }) => {
  return (
    <div className="product__card">
      <Link to={`/product${id}`}>
        <LazyLoadImage
          effect="blur"
          src={img}
          alt={title}
          className="product__card__img"
        />
      </Link>
      <div className="product__card__info">
        <p className="product__card__title">{title}</p>
        <p className="product__card__price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
