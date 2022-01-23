import { Component } from "react";
import "./product.css";
import ProductsContext from "../context/Products";

class Product extends Component {
  static contextType = ProductsContext;
  
  render() {
    const {productName} = this.props;
    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button
          onClick={this.handleIncrement}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="m-2 btn btn-sm btn-warning"
        >
          -
        </button>
        <button
          onClick={this.handleDelete}
          className="m-2 btn btn-sm btn-danger"
        >
          delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.context.onInc(this.props.id)
  };

  handleDecrement = () => {
    this.context.onDec(this.props.id)
  };

  handleDelete = () => {
    this.context.onDel(this.props.id)
  };

  format() {
    if (this.props.count === 0) {
      return "zero";
    } else {
      return this.props.count;
    }
  }
}

export default Product;
