import "./Product.css";
import PriceBox from "./PriceBox";

function Product({ title,oldPrice,newPrice,description }) {
  return (
    <div id="Product">
      <div id="inner">
        <h3>{title}</h3>
        <ul>{description.map((desc)=><li>{desc}</li>)}</ul>
      </div>
      <PriceBox oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  );
}

export default Product;
