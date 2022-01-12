import { connect } from "react-redux"
import Splash from "./splash"
import { clearProducts, requestAllProducts } from "../../actions/products_actions"
import { requestCartItems } from "../../actions/cart_items_actions"
const mapStateToProps = state => ({
    products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
    requestAllProducts: () => dispatch(requestAllProducts()),
    requestCartItems: () => dispatch(requestCartItems()),
    clearProducts: () => dispatch(clearProducts())
})

export default connect(mapStateToProps,mapDispatchToProps)(Splash)