import * as CartApiUtils from "../util/cart_api_utils"

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

const removeCartItem = cartItemId => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})

export const requestCartItems = () => dispatch => (
    CartApiUtils.fetchAllCartItems()
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
)

export const addCartItem = (cartItem) => dispatch => (
    CartApiUtils.addCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const updateCartItem = (cartItem) => dispatch => (
    CartApiUtils.updateCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = cartItemId => dispatch => (
    CartApiUtils.deleteCartItem(cartItemId)
        .then(() => dispatch(removeCartItem(cartItemId)))
)