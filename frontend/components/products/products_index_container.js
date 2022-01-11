import { connect } from "react-redux";
import { requestDepartment } from "../../actions/departments_actions";
import { requestAllProducts } from "../../actions/products_actions";
import ProductsIndex from "./products_index";


const mapStateToProps = (state, ownProps) => ({
    products: Object.values(state.entities.products)
    //test
    // department: state.entities.departments[ownProps.match.params.departmentName]
})

const mapDispatchToProps = dispatch => ({
    requestAllProducts: () => dispatch(requestAllProducts()),
    // // test
    // requestDepartments: () => dispatch(requestDepartments()),
    // requestDepartment: (departmentName) => dispatch(requestDepartment(departmentName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);