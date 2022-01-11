import React from "react";
import reactRouterDom from "react-router-dom";

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.review;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.formAction(this.state)
            .then(() => this.props.history.push(`/products/${this.props.product.id}`))
            .then(() => window.scroll(0,0))
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

        const { product, errors } = this.props;
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
                            {errors.includes("Score must be greater than 0") ? 
                                <p className="review-error">!  Please select a star rating</p> : ""}
                        </label>
                        <label><h2>Add a headline</h2>
                            <input 
                                type="text"
                                value={this.state.title}
                                onChange={e=>this.setState({title: e.currentTarget.value})}
                                placeholder="Whats most important to know?"/>
                            {errors.includes("Title can't be blank") ? 
                                <p className="review-error">!  Please enter your headline</p> : ""}
                        </label>
                        <label><h2>Add a written review</h2>
                            <textarea 
                                value={this.state.body}
                                onChange={e=>this.setState({body: e.currentTarget.value})}
                                placeholder="What did you like or dislike?
                                What did you use this product for?"/>
                            {errors.includes("Body can't be blank") ? 
                                <p className="review-error">!  Please add a written review</p> : ""}
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