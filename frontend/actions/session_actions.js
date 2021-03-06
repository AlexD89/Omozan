import * as SessionApiUtils from "../util/session_api_utils"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => {
    return {
    type: RECEIVE_ERRORS,
    errors
}}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const login = user => dispatch =>(
    SessionApiUtils.login(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const logout = () => dispatch => {
    return SessionApiUtils.logout()
        .then(
            () => dispatch(logoutCurrentUser()),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
}

export const signup = user => dispatch => (
    SessionApiUtils.signup(user)
        .then(
            (user) => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)
