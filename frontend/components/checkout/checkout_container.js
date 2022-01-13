import { connect } from "react-redux";
import Checkout from "./checkout";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

export default withRouter(connect(mapStateToProps, null)(Checkout));