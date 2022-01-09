import React from "react";

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.review
    }

    componentDidMount(){
        this.props.requestProduct(this.props.match.params.productId)
    }

    render(){

        const { product } = this.props;
        if (!product) return null;
        console.log(this.props.review);
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
                        <input type="radio" name="review-score" value={1}/>
                        <input type="radio" name="review-score" value={2}/>
                        <input type="radio" name="review-score" value={3}/>
                        <input type="radio" name="review-score" value={4}/>
                        <input type="radio" name="review-score" value={5}/>
                    </div>
                    <h2>Add a headline</h2>
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange={e=>this.setState({title: e.currentTarget.value})}/>
                    <h2>Add a written review</h2>
                    <textarea 
                        value={this.state.body}
                        onChange={e=>this.setState({body: e.currentTarget.value})}/>
                    <button onClick={e=>this.props.formAction(this.state)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default ReviewForm;