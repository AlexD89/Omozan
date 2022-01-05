import React from "react";
import { Link } from "react-router-dom";

class ProductsIndexItem extends React.Component {
    render(){
        const { product } = this.props;
        return <div className="product-tab">
            <Link to={`/products/${this.props.product.id}`}>
                <div>
                    <div className="index-img-box">
                        <img src={product.imageURL} />
                    </div>
                    <br />
                    <h3>${product.price.toFixed(2)}</h3>
                    <br />
                    {product.title}
                </div>
            </Link>
        </div>
    }
}

export default ProductsIndexItem;