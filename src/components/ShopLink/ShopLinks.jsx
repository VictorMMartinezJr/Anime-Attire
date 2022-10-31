import ShopLink from "./ShopLink";
import "./ShopLink.css";

const ShopLinks = () => {
  return (
    <section id="shoplinks">
      <ShopLink apparelLink={true} linkText={"Apparel"} />
      <ShopLink apparelLink={false} linkText={"Accessories"} />
    </section>
  );
};

import "./ShopLink.css";
export default ShopLinks;
