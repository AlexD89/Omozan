import React from "react";
import { Link } from "react-router-dom";

class ProductsIndexItem extends React.Component {
    render(){
        return <div className="product-tab">
            {/* <li> */}
                <Link to={`/products/${this.props.product.id}`}>
                    <div>

                    </div>
                </Link>
            {/* </li> */}
        </div>
    }
}

export default ProductsIndexItem;