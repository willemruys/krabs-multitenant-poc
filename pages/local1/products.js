import ProductContainer from "../components/products/ProductContainer";

function Products(props) {
  return (
    <>
      <ProductContainer tenant={props.tenant} />
    </>
  );
}

export default Products;
