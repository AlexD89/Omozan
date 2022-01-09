import { connect } from "react-redux";
import { requestProduct } from "../../actions/products_actions";
import { createReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    review: {
        title: "",
        body: "",
        score: 1,
        author_id: state.session.currentUserId,
        product_id: ownProps.match.params.productId
    }
})

const mapDispatchToProps = dispatch => ({
    requestProduct: productId => dispatch(requestProduct(productId)),
    formAction: review => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)