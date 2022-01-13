import React from "react";
import ProductsIndexItem from "../products/product_index_item";

class SearchIndex extends React.Component {
    componentDidMount(){       
        this.props.requestSearchProducts(this.props.location.search)
    }
    
    componentDidUpdate(oldProps){
        if(this.props.location.search != oldProps.location.search){
            this.props.requestSearchProducts(this.props.location.search);
        }
    }
    
    render(){
        if(!this.props.products) return null
        return(
        <div className="index-page">
            {this.props.products.length === 0 ? 
                <div className="no-product"><img src={window.no_productURL} alt="" /></div> : ""} 
            <ul className="product-grid">
                {this.props.products.map((product) => (
                    <ProductsIndexItem product={product} key={product.id} />
                ))}
            </ul>
        </div>
        )

    }
}

export default SearchIndex;