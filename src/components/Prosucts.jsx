import React, { Component } from "react";
import Product from "./Product.jsx";

class Products extends Component {
  state = {
    products: [
      {id: 1, count: 2, productName: 'laptop'},
      {id: 2, count: 1, productName: 'mobile'},
      {id: 3, count: 4, productName: 'ipad'},
    ]
  };
  render() {
    return (
      <>
        {this.state.products.map((p, index) => (
          <Product onDelete={this.handleDelete} key={index} id={p.id} productName={p.productName} count={p.count} />
        ))}
      </>
    );
  }
  handleDelete = (productId) => {
    const newProducts = this.state.products.filter(p => p.id !== productId);
    this.setState({products: newProducts})
  }
};

export default Products;
