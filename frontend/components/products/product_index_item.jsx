import React from "react";
import { Link } from "react-router-dom";

class ProductsIndexItem extends React.Component {

    getDecimals = (num) => {
        const n = num.toFixed(2);
        return n.slice(n.length - 2)
    }

    render(){
        const { product } = this.props;
        return <div className="product-tab">
            <Link to={`/products/${this.props.product.id}`}>
                <div>
                    <div className="index-img-box">
                        <img src={product.imageURL} />
                    </div>
                    <br />
                    <div className="price-box">
                        <span className="decimals">$</span>
                        <h3>
                            {Math.floor(product.price)}
                        </h3>
                        <span className="decimals">
                            {this.getDecimals(product.price)}
                        </span>
                    </div>
                    <br />
                    {product.title}
                </div>
            </Link>
        </div>
    }
}

export default ProductsIndexItem;