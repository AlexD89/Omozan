import React from "react";

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.review;
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.formType === "edit"){
            this.props.formAction(this.state)
                .then(() => this.props.history.push(`/products/${this.props.product.id}`))
        } else if (this.props.formType === "create") {
            this.props.formAction(this.state)
            window.setTimeout(() => this.props.history.push(`/products/${this.props.product.id}`), 1)
        }
    }

    handleRadio = (e) => {
        this.setState({ score: e.currentTarget.value })
    }

    render(){

        const { product } = this.props;
        const scoreValues = [1,2,3,4,5]
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
                    <form onSubmit={this.handleSubmit}>
                        <label><h2>Overall rating</h2>
                            {scoreValues.map(score => (
                                <input 
                                    key={score}
                                    type="radio" 
                                    name="score" 
                                    value={score}
                                    onClick={this.handleRadio} 
                                    defaultChecked={this.state.score == score}/>
                            ))}
                        </label>
                        <label><h2>Add a headline</h2>
                            <input 
                                type="text"
                                value={this.state.title}
                                onChange={e=>this.setState({title: e.currentTarget.value})}
                                placeholder="Whats most important to know?"/>
                        </label>
                        <label><h2>Add a written review</h2>
                            <textarea 
                                value={this.state.body}
                                onChange={e=>this.setState({body: e.currentTarget.value})}
                                placeholder="What did you like or dislike?
                                                What did you use this product for?"/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ReviewForm;