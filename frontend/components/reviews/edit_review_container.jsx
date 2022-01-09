import React from "react";
import { connect } from "react-redux";
import { requestProduct } from "../../actions/products_actions";
import { requestReviews, updateReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";

class EditReviewForm extends React.Component {
    componentDidMount(){
        this.props.requestReviews(this.props.match.params.productId);
        this.props.requestProduct(this.props.match.params.productId);
    }


    render(){
        const { product, review, formAction } = this.props;
        if (!review || !product) return null;
        return (
            <ReviewForm 
                product={product}
                review={review}
                formAction={formAction}
                history={this.props.history}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let reviewToEdit;
    Object.values(state.entities.reviews).forEach( review => {
        if(review.author_id == state.session.currentUserId){
            reviewToEdit = review;
        }
    })
    return {
        product: state.entities.products[ownProps.match.params.productId],
        review: reviewToEdit
    };
}

const mapDispatchToProps = dispatch => ({
    requestReviews: productId => dispatch(requestReviews(productId)),
    requestProduct: productId => dispatch(requestProduct(productId)),
    formAction: review => dispatch(updateReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)