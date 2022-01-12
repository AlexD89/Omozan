import * as ProductsApiUtils from "../util/products_api_util"

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS'

const receiveAllProducts = products => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})

export const clearProducts = () => ({
    type: CLEAR_PRODUCTS
})

export const requestAllProducts = () => dispatch => (
    ProductsApiUtils.fetchAllProducts()
        .then((products) => dispatch(receiveAllProducts(products)))
)

export const requestProduct = (productId) => dispatch => (
    ProductsApiUtils.fetchProduct(productId)
        .then(product => dispatch(receiveProduct(product)))
)
