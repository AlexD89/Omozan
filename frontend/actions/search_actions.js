import { fetchSearchProducts } from "../util/search_api_utils";

export const RECEIVE_SEARCH_PRODUCTS = 'RECEIVE_SEARCH_PRODUCTS'

const receiveSearchProducts = searchProducts => ({
    type: RECEIVE_SEARCH_PRODUCTS,
    searchProducts
})

export const requestSearchProducts = (query) => dispatch => (
    fetchSearchProducts(query)
        .then(products => dispatch(receiveSearchProducts(products)))
)