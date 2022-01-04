import { connect } from "react-redux";
import { requestAllProducts } from "../../actions/products_actions";
import Products from "./products";


const mapStateToProps = state => ({
    products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
    requestAllProducts: () => dispatch(requestAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);