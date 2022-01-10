import * as ReviewsApiUtils from "../util/reviews_api_utils"

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_REVIEW_ERRORS ='RECEIVE_REVIEW_ERRORS'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS'

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

const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_REVIEW_ERRORS
})

export const requestReviews = (productId) => dispatch => (
    ReviewsApiUtils.fetchAllReviews(productId)
        .then(reviews => dispatch(receiveAllReviews(reviews)))
)

export const createReview = ( review ) => dispatch => {
    ReviewsApiUtils.createReview(review)
        .then(review => dispatch(receiveReview(review)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateReview = ( review ) => dispatch => (
    ReviewsApiUtils.updateReview(review)
        .then(review => dispatch(receiveReview(review)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deleteReview = ( reviewId ) => dispatch => (
    ReviewsApiUtils.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
)