import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Prosucts";
import ProductsContext from "./context/Products.js";

class App extends Component {

  state = {
    products: [
      { id: 1, count: 2, productName: "laptop" },
      { id: 2, count: 1, productName: "mobile" },
      { id: 3, count: 4, productName: "ipad" },
    ],
  };
  
  render() {
    return (
      <>
        <ProductsContext.Provider
          value={{
            products: this.state.products,
            onInc: this.handleInc,
            onReset: this.handleReset,
            onDel: this.handleDelete,
            onDec: this.handleDec
          }}
        >
          <Navbar />
          <Products />
        </ProductsContext.Provider>
      </>
    );
  }
  handleDelete = (productId) => {
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products: newProducts });
  };
  handleInc = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };
  handleDec = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };
  handleReset = () => {
    const newProducts = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products: newProducts });
  };
}

export default App;
