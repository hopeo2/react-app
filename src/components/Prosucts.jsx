import React, { Component } from "react";
import Product from "./Product.jsx";
import ProductsContext from "../context/Products";


class Products extends Component {
  static contextType = ProductsContext;

  render() {
    return (
      <>
        <button onClick={this.context.onReset} className="btn btn-primary">Reset</button>
        {this.context.products.map((p, index) => (
          <Product
            key={index}
            id={p.id}
            productName={p.productName}
            count={p.count}
          />
        ))}
      </>
    );
  }
  
};

export default Products;
