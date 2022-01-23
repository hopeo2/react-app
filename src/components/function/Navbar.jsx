import ProductContext from "../../context/Products";
import { useContext } from "react";

const Navbar = (props) => {
    const productsContext = useContext(ProductContext)

    return (
        <nav className="navbar navbar-header bg-dark">
            <div className="container">
                <a href="/#" className="navbar-brand">
                    All Product {calculateSum()}
                </a>
            </div>
        </nav>
    );

    function calculateSum(){
        let proNum = 0;
        productsContext.products.forEach(p => {
            proNum += p.count;
        })
        return proNum;
    }
}
 
export default Navbar;