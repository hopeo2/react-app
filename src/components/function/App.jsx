import Navbar from "./Navbar";
import Products from "./Products";
import { useState } from "react";
import ProductContext from "../../context/Products";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, count: 2, productName: "laptop" },
    { id: 2, count: 1, productName: "phone" },
    { id: 3, count: 4, productName: "airpods" },
  ]);
  return (
    <>
      <ProductContext.Provider value={{
        products: products,
        onReset: handleReset,
        onInc: handleInc,
        onDec: handleDec,
        onDel: handleDelete
      }}>
        <Navbar />
        <Products/>
      </ProductContext.Provider>
    </>
  );

  function handleInc(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }
  function handleDec(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }
  function handleDelete(productId) {
    const newProducts = products.filter((p) => p.id !== productId);
    setProducts(newProducts);
  }
  function handleReset() {
    const newProducts = products.map((p) => {
      p.count = 0;
      return p;
    });
    setProducts(newProducts);
  }
};

export default App;
