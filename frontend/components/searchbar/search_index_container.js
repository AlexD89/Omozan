import { connect } from "react-redux"
import { requestSearchProducts } from "../../actions/search_actions"
import SearchIndex from "./search_index"

const mapStateToProps = (state, ownProps) => ({
    products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
    requestSearchProducts: (query) => dispatch(requestSearchProducts(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex)