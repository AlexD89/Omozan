import { connect } from "react-redux"
import { clearErrors, signup } from "../../actions/session_actions"
import SessionForm from "./session_form"


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Signup"
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)