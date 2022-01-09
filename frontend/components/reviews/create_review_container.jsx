import React from "react";
import { connect } from "react-redux";
import { requestProduct } from "../../actions/products_actions";
import { createReview } from "../../actions/reviews_actions";
import ReviewForm from "./review_form";

class CreateReviewForm extends React.Component {
    componentDidMount() {
        this.props.requestProduct(this.props.match.params.productId);
    }


    render() {
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

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    review: {
        title: "",
        body: "",
        score: 0,
        author_id: state.session.currentUserId,
        product_id: ownProps.match.params.productId
    }
})

const mapDispatchToProps = dispatch => ({
    requestProduct: productId => dispatch(requestProduct(productId)),
    formAction: review => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm)