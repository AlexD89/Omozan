import React from "react";
import { Link } from "react-router-dom";

class ProductsIndexItem extends React.Component {

    avgScore = score => {
        if (score >= 1 && score < 1.5) {
            return "avg-1";
        } else if (score >= 1.5 && score < 2) {
            return "avg-1-5";
        } else if (score >= 2 && score < 2.5) {
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

    cutTitle = (title, length) => (
        title.length > length ? `${title.slice(0,length)}...`  : title
    )

    render(){
        const { product, reviews } = this.props;
        return <div className="product-tab">
            <Link to={`/products/${this.props.product.id}`}>
                <div>
                    <div className="index-img-box">
                        <img src={product.imageURL} />
                    </div>
                    {this.cutTitle(product.title,120)}
                    <div className="product-score">
                        <div className={`score-box ${this.avgScore(product.avgScore)}`}></div>
                        <div className="score-count">
                            {product.reviewCount}
                        </div>
                    </div>
                    <div className="price-box">
                        <h3>
                            ${product.price.toFixed(2)}
                        </h3>
                    </div>
                </div>
            </Link>
        </div>
    }
}

export default ProductsIndexItem;