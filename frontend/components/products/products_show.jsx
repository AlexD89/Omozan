import React from "react";

class ProductsShow extends React.Component {

    constructor(props){
        super(props);
        this.state = ({product_qty: 1})
    }
    
    componentDidMount(){
        this.props.requestProduct(this.props.match.params.productId)
    }

    handleAddProduct = (e) => {
        e.preventDefault();
        if (this.props.currentUserId) {
            const temp = {buyer_id: this.props.currentUserId, 
                            product_id: this.props.product.id, 
                            product_qty: this.state.product_qty};
            this.props.addToCart(temp);
        } else {
            this.props.history.push("/login")
        }
        
    }

    render(){
        if (!this.props.product) return null;
        const {product} = this.props;
        console.log(this.state);
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
                            {"&"} <span className="blue">free returns</span>
                        </p>
                        <p>FREE delivery January 23 - August 5</p>
                        <select 
                            defaultValue={1}
                            className="show-qty" 
                            onChange={e => this.setState({ product_qty: parseInt(e.currentTarget.value)})}>
                            <option value={1}>Qty:  1</option>
                            <option value={2}>Qty:  2</option>
                            <option value={3}>Qty:  3</option>
                        </select>
                        <button 
                            className="add-btn"
                            onClick={this.handleAddProduct}>
                            Add to Cart
                        </button>
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