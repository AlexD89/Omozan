import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestProduct } from "../../actions/products_actions";
import { clearErrors, deleteReview, requestReviews, updateReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";

class EditReviewForm extends React.Component {
    componentDidMount(){
        this.props.requestReviews(this.props.match.params.productId);
        this.props.requestProduct(this.props.match.params.productId);
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }


    render(){
        const { product, review, formAction, formType } = this.props;
        if (!review || !product) return null;
        return (
            <ReviewForm 
                errors={this.props.errors}
                formType={formType}
                deleteReview={this.props.deleteReview}
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
        review: reviewToEdit,
        errors: state.errors.reviews,
        formType: "edit"
    };
}

const mapDispatchToProps = dispatch => ({
    requestReviews: productId => dispatch(requestReviews(productId)),
    requestProduct: productId => dispatch(requestProduct(productId)),
    formAction: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)