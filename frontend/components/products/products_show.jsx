import React from "react";
import { Link } from "react-router-dom";

class ProductsShow extends React.Component {
    render(){
        return(
            <div>
                {this.props.product.title}
                <br />
                <Link to="/products/">Index</Link>
            </div>
        )
    }
}

export default ProductsShow;