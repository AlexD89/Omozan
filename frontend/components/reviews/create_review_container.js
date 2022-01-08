import { connect } from "react-redux";
import { requestProduct } from "../../actions/products_actions";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId]
})

const mapDispatchToProps = dispatch => ({
    requestProduct: productId => dispatch(requestProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)