import { connect } from "react-redux"
import { deleteCartItem, requestCartItems } from "../../actions/cart_items_actions";
import CartIndex from "./cart_index"

const mapStateToProps = state => ({
    cartItems: Object.values(state.entities.cartItems)
})

const mapDispatchToProps = dispatch => ({
    requestCartItems: () => dispatch(requestCartItems()),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);