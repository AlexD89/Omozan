import React from "react";
import ProductsIndexItem from "./product_index_item";

class ProductsIndex extends React.Component {

    componentDidMount(){
        this.props.requestAllProducts();
    }

    render(){
        const { products } = this.props;
        return(
            <div>
                <ul>
                    {products.map((product) => (
                        <ProductsIndexItem product={product} key={product.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProductsIndex;