import "./ShopLink.css";
import shopApparel from "../../assets/shop-apparel.jpg";
import shopAccessories from "../../assets/shop-accessories.jpg";
import { Link } from "react-router-dom";
const ShopLink = ({ apparelLink, linkText }) => {
  return (
    <div
      id="shoplink"
      style={{
        backgroundImage: `url(${apparelLink ? shopApparel : shopAccessories})`,
      }}
    >
      <Link to={apparelLink ? "/" : "/accessories"} className="shoplink__link">
        {`Shop ${linkText}`}
      </Link>
    </div>
  );
};

export default ShopLink;
