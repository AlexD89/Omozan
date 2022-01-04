import React from "react";
import { Link } from "react-router-dom";

class ProductsIndexItem extends React.Component {
    render(){
        const product = this.props;
        return <div className="product-tab">
            <Link to={`/products/${this.props.product.id}`}>
                <div>
                    {this.props.product.title}
                    <br />
                    {this.props.product.price}
                </div>
            </Link>
        </div>
    }
}

export default ProductsIndexItem;