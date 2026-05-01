import Product from "./Product";

function ProductTab() {
  return (
    <>
      <h2>Blockbuster Deals| Shop Now</h2>
      <Product title="Logitech MX Master" oldPrice="12,495" newPrice="8,999" description={["8000 DPI","5 Programmable Buttons"]} />
      <Product title="Apple Pencil(2nd Gen)" oldPrice="11,900" newPrice="9,199" description={["Intutive Touch Surface","Designed for iPad Pro"]} />
      <Product title="Zebronics" oldPrice="10,599" newPrice="899" description={["Intutive Touch Surface","Designed for iPad Pro"]} />
      <Product title="Petronics Toad" oldPrice="599" newPrice="278" description={["Wireless Mouse 2.4GHz","Optical Orientation"]} />
    </>
  );
}

export default ProductTab;
