import React from "react";
import ReviewItem from "../reviews/reviews_item";
import { Link } from "react-router-dom";

class ProductsShow extends React.Component {

    constructor(props){
        super(props);
        this.state = ({product_qty: 1})
    }
    
    componentDidMount(){
        window.scrollTo(0,0);
        this.props.requestProduct(this.props.match.params.productId);
        this.props.requestReviews(this.props.match.params.productId);
    }

    handleAddProduct = (e) => {
        e.preventDefault();
        if (this.props.currentUserId) {
            const newCartItem = {buyer_id: this.props.currentUserId, 
                            product_id: this.props.product.id, 
                            product_qty: this.state.product_qty};
            if (this.props.cart.some(ci => ci.product_id === this.props.product.id)){
                this.props.cart.forEach(ci => {
                    if (ci.product_id === this.props.product.id) {
                        const newCartItem = ci;
                        newCartItem["product_qty"] += this.state.product_qty;
                        this.props.updateCartItem(newCartItem)
                    }
                })
            } else {
                this.props.addToCart(newCartItem);
            }
        } else {
            this.props.history.push("/login")
        }
        
    }

    reviewExist = () => (
        Object.values(this.props.reviews).some(review => (
            review.author_id == this.props.currentUserId
        )) ? true : false
    )

    avgScore = score => {
        if (score >= 1 && score < 1.5){
            return "avg-1";
        } else if (score >= 1.5 && score < 2) {
            return "avg-1-5";
        } else if (score >= 2 && score < 2.5){
            return "avg-2";
        } else if (score >= 2.5 && score < 3) {
            return "avg-2-5";
        } else if (score >= 3 && score < 3.5) {
            return "avg-3";
        } else if (score >= 3.5 && score < 4) {
            return "avg-3-5";
        } else if (score >= 4 && score < 4.3) {
            return "avg-4";
        } else if (score >= 4.3 && score < 4.8) {
            return "avg-4-5";
        } else if (score >= 4.8 && score <= 5) {
            return "avg-5";
        } else {
            return "avg-0";
        }
    }

    getDecimals = (num) => {
        const n = num.toFixed(2);
        return n.slice(n.length-2)
    }

    render(){
        if (!this.props.product) return null;
        const { product, reviews, formType } = this.props;
        const reviewsArr = Object.values(reviews);
        return(
            <div className="show-page">
                <div className="show-details">
                    <figure className="show-image"> 
                        <img src={product.imageURL} />
                    </figure>
                    <section className="show-description">
                        <h1>{product.title}</h1>
                        <div className={`score-box ${this.avgScore(product.avgScore)}`}></div>
                        <div className="divider"></div>
                        <div className="price-box">
                            <span className="decimals">$</span>
                            <h3>
                                {Math.floor(product.price)}
                            </h3>
                            <span className="decimals">
                                {this.getDecimals(product.price)}
                            </span>
                        </div>
                        <div className="product-desc">
                            {product.description}
                        </div>
                    </section>
                    <aside className="show-purchase">
                        <div className="price-box">
                            <span className="decimals">$</span>
                            <h3>
                                {Math.floor(product.price)}
                            </h3>
                            <span className="decimals">
                                {this.getDecimals(product.price)}
                            </span>
                        </div>
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
                        <button className="purchase-btn" onClick={e=>location.reload()}>Buy Now</button>
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
                <div className="divider show"></div>
                <div className="show-reviews">
                    <aside>
                        <h1>Customer Reviews</h1>
                        <div className="aside-score">
                            <div className={`score-box ${this.avgScore(product.avgScore)}`}></div>
                            <h2>{product.avgScore.toFixed(1)} out of 5</h2>
                        </div>
                        <div className="divider"></div>
                        <h3>Review this product</h3>
                        <p>Share your thoughts with other customers</p>
                        <Link to={
                                this.reviewExist() ? `/reviews/edit-review/${product.id}` : `/reviews/create-review/${product.id}`
                            } > 
                            <button>
                                {!this.reviewExist() ? 
                                    "Write a customer review" : "Edit customer review "}
                            </button>
                        </Link>
                    </aside>
                    <section>
                        <ul>
                            {reviewsArr.reverse().map( review => (
                                <ReviewItem 
                                    review={review}
                                    key={review.id}/>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default ProductsShow;