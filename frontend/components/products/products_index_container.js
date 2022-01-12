import { connect } from "react-redux";
import { requestDepartmentProducts } from "../../actions/departments_actions";
import { clearProducts, requestAllProducts } from "../../actions/products_actions";
import ProductsIndex from "./products_index";


const mapStateToProps = (state, ownProps) => ({
    products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
    requestAllProducts: () => dispatch(requestAllProducts()),
    clearProducts: () => dispatch(clearProducts()),
    requestDepartmentProducts: (departmentName) => dispatch(requestDepartmentProducts(departmentName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);