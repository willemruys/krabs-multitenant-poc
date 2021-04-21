import useProducts from "../../../services/products/products";

function ProductContainer({ tenant }) {
  const { products } = useProducts(tenant);
  return <p>{JSON.stringify(products)}</p>;
}

export default ProductContainer;
