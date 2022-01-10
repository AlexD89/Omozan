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
            window.setTimeout(() => this.props.history.push(`/products/${this.props.product.id}`), 10)
        }
    }

    

    handleRadio = (e) => {
        this.setState({ score: e.currentTarget.value })
    }

    handleDelete = e => {
        this.props.deleteReview(this.props.review.id)
            .then(() => this.props.history.push(`/products/${this.props.product.id}`))
    }

    renderDelete = (formType) => {
        if (formType === 'edit') {
            return <span 
                onClick={this.handleDelete}
                className="blue">
                    Delete Review</span>;
        }
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
                            {/* {scoreValues.map((score, i) => (
                                <div key={i}>
                                    <input 
                                        id={`radio${score}`}
                                        type="radio" 
                                        name="score" 
                                        value={score}
                                        onClick={this.handleRadio} 
                                        defaultChecked={this.state.score == score}/>
                                    <label 
                                        htmlFor={`radio${score}`} 
                                        className={this.state.score > i ? "radio-score checked-radio" : "radio-score"}>5
                                    </label>
                                </div>
                            ))} */}
                            <div className="stars-radio">
                                <input id="radio-1" type="radio" name="score" value={1} onClick={this.handleRadio} defaultChecked={this.state.score == 1}/>
                                <label htmlFor="radio-1" className={this.state.score >= 1 ? "radio-score checked-radio" : "radio-score"}></label>
                                <input id="radio-2" type="radio" name="score" value={2} onClick={this.handleRadio} defaultChecked={this.state.score == 2}/>
                                <label htmlFor="radio-2" className={this.state.score >= 2 ? "radio-score checked-radio" : "radio-score"}></label>
                                <input id="radio-3" type="radio" name="score" value={3} onClick={this.handleRadio} defaultChecked={this.state.score == 3}/>
                                <label htmlFor="radio-3" className={this.state.score >= 3 ? "radio-score checked-radio" : "radio-score"}></label>
                                <input id="radio-4" type="radio" name="score" value={4} onClick={this.handleRadio} defaultChecked={this.state.score == 4}/>
                                <label htmlFor="radio-4" className={this.state.score >= 4 ? "radio-score checked-radio" : "radio-score"}></label>
                                <input id="radio-5" type="radio" name="score" value={5} onClick={this.handleRadio} defaultChecked={this.state.score == 5}/>
                                <label htmlFor="radio-5" className={this.state.score >= 5 ? "radio-score checked-radio" : "radio-score"}></label>
                            </div>
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
                        <div className="review-form-btns">
                            {this.renderDelete(this.props.formType)}
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReviewForm;