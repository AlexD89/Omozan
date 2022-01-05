import React from "react";
import { Link } from "react-router-dom";

class ProductsShow extends React.Component {
    componentDidMount(){
        this.props.requestProduct(this.props.match.params.productId)
    }

    render(){
        if (!this.props.product) return null;
        const {product} = this.props;
        return(
            <div className="show-page">
                <div className="show-details">
                    <figure className="show-image"> 
                        <img src={product.imageURL} />
                    </figure>
                    <section className="show-description">
                        <h1>{product.title}</h1>
                        <br />
                        <h3>${product.price.toFixed(2)}</h3>
                        <br />
                        {product.description}
                    </section>
                    <aside className="show-purchase">
                        <h3>${product.price.toFixed(2)}</h3>
                        <p>
                            & <span className="blue">free returns</span>
                        </p>
                        <p>FREE delivery January 23 - August 5</p>
                        <button className="add-btn">Add to Cart</button>
                        <br />
                        <button className="purchase-btn">Buy Now</button>
                        <p><span className="blue">Secure transactions</span></p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Ships from</td>
                                    <td>Omozan.com</td>
                                </tr>
                                <tr>
                                    <td>Sold by</td>
                                    <td>Omozan.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Return policy: <span className="blue">Eligable for Return, Refund or Replacement</span></p>
                    </aside>
                </div>
                <div className="show-reviews">
                    <div className="divider show"></div>
                    <h1>
                        Product Reviews
                    </h1>
                </div>
            </div>
        )
    }
}

export default ProductsShow;