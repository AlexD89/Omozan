import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Navbar from "./navbar"

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)