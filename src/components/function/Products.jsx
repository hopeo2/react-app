import Product from "./Product";
import ProductContext from "../../context/Products";
import { useContext } from "react";

const Products = () => {
  const productsContext = useContext(ProductContext);

  return (
    <>
      <button className="btn btn-primary" onClick={productsContext.onReset}>Reset</button>
      {productsContext.products.map((p, index) => (
        <Product id={p.id} productName={p.productName} key={index} count={p.count} />
      ))}
    </>
  );
  
};

export default Products;
