import { connect } from "react-redux";
import { requestProduct } from "../../actions/products_actions";
import { updateReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";


const mapStateToProps = (state, ownProps) => {
    let reviewToEdit;
    Object.values(state.entities.reviews).forEach( review => {
        if(review.author_id == state.session.currentUserId){
            reviewToEdit = review;
        }
    })
    return {
        review: reviewToEdit
    };
}

const mapDispatchToProps = dispatch => ({
    requestProduct: productId => dispatch(requestProduct(productId)),
    actionForm: review => dispatch(updateReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)