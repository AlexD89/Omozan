import { connect } from "react-redux"
import { requestCartItems } from "../../actions/cart_items_actions"
import { logout } from "../../actions/session_actions"
import Navbar from "./navbar"

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    count: Object.values(state.entities.cartItems)
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    requestCartItems: () => dispatch(requestCartItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)