import React from "react";
import { Link } from "react-router-dom";

class ProductsShow extends React.Component {
    render(){
        return(
            <div>
                show container
                <Link to="/products/">Index</Link>
            </div>
        )
    }
}

export default ProductsShow;