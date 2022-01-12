import React from "react";
import ProductsIndexItem from "./product_index_item";

class ProductsIndex extends React.Component {

    componentDidMount(){
        if (this.props.match.params.departmentName === "all"){
            this.props.requestAllProducts()
        } else {
            this.props.requestDepartmentProducts(this.props.match.params.departmentName)
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.location.pathname !== prevProps.location.pathname){
            (this.props.match.params.departmentName === "all") ? (
                this.props.requestAllProducts()
            ) : (
                this.props.requestDepartmentProducts(this.props.match.params.departmentName)
            )
        }
    }  

    render(){
        const { products } = this.props;
        if (!products) return null;
        
        return(
            <div className="index-page">  
                <ul className="product-grid">
                    {products.map((product) => (
                        <ProductsIndexItem product={product} key={product.id} />
                        ))}
                </ul>
            </div>
        )
    }
}

export default ProductsIndex;