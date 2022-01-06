import { connect } from "react-redux"
import { deleteCartItem, requestCartItems } from "../../actions/cart_items_actions";
import { requestAllProducts } from "../../actions/products_actions"
import { updateCartItem } from "../../actions/cart_items_actions";
import CartIndex from "./cart_index"

const mapStateToProps = state => ({
    cartItems: Object.values(state.entities.cartItems),
    products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
    requestCartItems: () => dispatch(requestCartItems()),
    requestAllProducts: () => dispatch(requestAllProducts()),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);