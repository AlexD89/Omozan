import { connect } from "react-redux";
import ProductsShow from "./products_show";
import { requestProduct } from "../../actions/products_actions";
import { addCartItem, updateCartItem } from "../../actions/cart_items_actions";

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    currentUserId: state.session.currentUserId,
    cart: Object.values(state.entities.cartItems)
})

const mapDispatchToProps = (dispatch) => ({
    requestProduct: (productId) => dispatch(requestProduct(productId)),
    addToCart: (cartItem) => dispatch(addCartItem(cartItem)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductsShow)