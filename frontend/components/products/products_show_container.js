import { connect } from "react-redux";
import ProductsShow from "./products_show";
import { requestProduct } from "../../actions/products_actions";

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId]
})

const mapDispatchToProps = (dispatch) => ({
    requestProduct: (productId) => dispatch(requestProduct(productId))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductsShow)