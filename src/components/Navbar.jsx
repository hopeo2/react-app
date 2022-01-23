import React, { Component } from 'react';
import ProductsContext from "../context/Products";

class Navbar extends Component {
    static contextType = ProductsContext;

    render() { 
        return (
            <nav className="navbar navbar-header bg-dark">
                <div className="container">
                    <a href="/#" className="navbar-brand">
                        All Product {this.calculateSum()}
                    </a>
                </div>
            </nav>
        );
    }
    calculateSum = () => {
        let proNum = 0;
        this.context.products.forEach(p => {
            proNum += p.count;
        })
        return proNum;
    }
}
 
export default Navbar;