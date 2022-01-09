import React from "react";

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.review;
    }

    // componentDidMount(){
    //     this.props.requestProduct(this.props.match.params.productId)
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.formAction(this.state);
        this.props.history.push(`/products/${this.props.product.id}`)
    }

    handleRadio = (e) => {
        this.setState({ score: e.currentTarget.value })
    }

    render(){

        const { product } = this.props;
        if (!product ) return null;
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
                        <input type="radio" name="score" value={1} onClick={this.handleRadio}/>
                        <input type="radio" name="score" value={2} onClick={this.handleRadio}/>
                        <input type="radio" name="score" value={3} onClick={this.handleRadio}/>
                        <input type="radio" name="score" value={4} onClick={this.handleRadio}/>
                        <input type="radio" name="score" value={5} onClick={this.handleRadio}/>
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
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default ReviewForm;