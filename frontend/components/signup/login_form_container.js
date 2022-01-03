import { connect } from "react-redux"
import { clearErrors, login } from "../../actions/session_actions"
import SessionForm from "./session_form"


const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: "Login"
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)