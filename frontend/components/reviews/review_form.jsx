import React from "react";

class ReviewForm extends React.Component {
    componentDidMount(){
        this.props.requestProduct(this.props.match.params.productId)
    }

    render(){
        const { product } = this.props;
        if (!product) return null;
        return(
            <div>
                <h1>Create Review</h1>
                <img src={product.imageURL}/>
                <h2>Overall rating</h2>
                <h2>Add a headline</h2>
                <h2>Add a written review</h2>
            </div>
        )
    }
}

export default ReviewForm;