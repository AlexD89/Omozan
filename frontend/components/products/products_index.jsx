    import React from "react";
import ProductsIndexItem from "./product_index_item";

class ProductsIndex extends React.Component {

    componentDidMount(){
        this.props.requestAllProducts();
        // this.props.requestDepartments();
        // this.props.requestDepartment(this.props.match.params.departmentName)
    }

    render(){
        // if (!this.props.department) return null;
        const { products } = this.props;
        // const pro = products.filter(product => this.props.department.product_ids.includes(product.id))
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