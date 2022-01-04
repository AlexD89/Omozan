import React from "react";
import ProductsItem from "./product_item";

class Products extends React.Component {

    componentDidMount(){
        this.props.requestAllProducts();
    }

    render(){
        const { products } = this.props;
        return(
            <div>
                <ul>
                    {products.map((product) => (
                        <ProductsItem product={product} key={product.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Products;