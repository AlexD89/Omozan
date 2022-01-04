import { connect } from "react-redux";
import ProductsShow from "./products_show";

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId]
})


export default connect(mapStateToProps, null)(ProductsShow)