import "./PriceBox.css";

export default function PriceBox({ oldPrice, newPrice }) {
  return (
    <div id="price">
      <p id="old">{oldPrice}</p>
      <p id="new">{newPrice}</p>
    </div>
  );
}
