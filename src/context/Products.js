import { createContext } from "react";

const ProductContext = createContext({
  products: [],
  onDelete: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
  onReset: () => {},
});

export default ProductContext;
