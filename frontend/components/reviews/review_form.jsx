import React from "react";

class ReviewForm extends React.Component {
    componentDidMount(){
        this.props.requestProduct(this.props.match.params.productId)
    }

    render(){
        const { product } = this.props;
        if (!product) return null;
        return(
            <div className="review-page">
                <div className="review-box">
                    <h1>Create Review</h1>
                    <div className="review-form-product">
                        <div className="review-form-img">
                            <img src={product.imageURL}/>
                        </div>
                        {product.title}
                    </div>
                    <div className="review-box-rating">
                        <h2>Overall rating</h2>
                        <input type="radio" value={1}/>
                        <input type="radio" value={2}/>
                        <input type="radio" value={3}/>
                        <input type="radio" value={4}/>
                        <input type="radio" value={5}/>
                    </div>
                    <h2>Add a headline</h2>
                    <input type="text" name="" id="" />
                    <h2>Add a written review</h2>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        )
    }
}

export default ReviewForm;