import * as ReviewsApiUtils from "../util/reviews_api_utils"

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

const receiveAllReviews = ( reviews ) => {
    return{
    type: RECEIVE_ALL_REVIEWS,
    reviews
}}

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const requestReviews = (productId) => dispatch => (
    ReviewsApiUtils.fetchAllReviews(productId)
        .then(reviews => dispatch(receiveAllReviews(reviews)))
)

export const createReview = ( review ) => dispatch => {
    ReviewsApiUtils.createReview(review)
        .then(review => dispatch(receiveReview(review)))
}

export const updateReview = ( review ) => dispatch => (
    ReviewsApiUtils.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = ( reviewId ) => dispatch => (
    ReviewsApiUtils.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
)