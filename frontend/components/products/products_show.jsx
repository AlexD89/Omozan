import React from "react";
import { Link } from "react-router-dom";

class ProductsShow extends React.Component {
    componentDidMount(){
        this.props.requestProduct(this.props.match.params.productId)
    }

    render(){
        if (!this.props.product) return null;
        return(
            <div>
                {this.props.product.title}
                <br />
                <img src={this.props.product.imageURL} alt="" />
                <Link to="/products/">Index</Link>
            </div>
        )
    }
}

export default ProductsShow;