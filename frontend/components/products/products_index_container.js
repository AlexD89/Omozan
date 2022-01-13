import { connect } from "react-redux";
import { requestDepartmentProducts } from "../../actions/departments_actions";
import { clearProducts, requestAllProducts } from "../../actions/products_actions";
import { requestReviews } from "../../actions/reviews_actions";
import ProductsIndex from "./products_index";


const mapStateToProps = (state, ownProps) => ({
    products: Object.values(state.entities.products),
    reviews: Object.values(state.entities.reviews)
})

const mapDispatchToProps = dispatch => ({
    requestAllProducts: () => dispatch(requestAllProducts()),
    clearProducts: () => dispatch(clearProducts()),
    requestDepartmentProducts: (departmentName) => dispatch(requestDepartmentProducts(departmentName)),
    requestReviews: (productId) => dispatch(requestReviews(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);