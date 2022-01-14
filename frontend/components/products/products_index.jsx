import React from "react";
import ProductsIndexItem from "./product_index_item";

class ProductsIndex extends React.Component {

    componentDidMount(){
        this.props.requestDepartmentProducts(this.props.match.params.departmentName)
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

    renderSubtitle = () => {
        switch (this.props.match.params.departmentName) {
            case "all":
                return "All Products"
            case "electronics":
                return "Electronics"
            case "computers":
                return "Computers"
            case "furniture":
                return "Furniture"
            case "bed_bath":
                return "Bed & Bath"
            case "cellphones":
                return "Cellphones"
            case "pet_supplies":
                return "Pet Supplies"
            case "kitchen":
                return "Kitchen"
            default:
                return ""
        }
    }

    render(){
        const { products } = this.props;
        if (!products) return null;
        
        return(
            <div className="index-page">  
                <h1>{this.renderSubtitle()}</h1>
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