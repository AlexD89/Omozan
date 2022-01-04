import React from "react";
import { Link } from "react-router-dom";

class ProductsItem extends React.Component {
    render(){
        return <div>
            <li>
                <Link to={`/products/${this.props.product.id}`}>
                    {this.props.product.title}
                </Link>
            </li>
        </div>
    }
}

export default ProductsItem;