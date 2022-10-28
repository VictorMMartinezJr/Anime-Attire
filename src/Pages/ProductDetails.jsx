import "./Pages.css";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="page__container" id="details__page">
      <h2>Product Details {id}</h2>
    </div>
  );
};

export default ProductDetails;
