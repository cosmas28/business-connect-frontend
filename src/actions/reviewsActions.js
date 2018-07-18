import axios from 'axios';
import * as actionTypes from './actionTypes';
import { addResponseMessage } from './responseMessage';

const apiUrl = 'http://127.0.0.1:5000/api/v2/businesses';

export const addReviewsSuccess = (review) => {
    return {
        review,
        type: actionTypes.ADD_REVIEWS_SUCCESS
    };
};

export const addReviews = (accessToken, businessId, inputData) => {
    return (dispatch) => {
        return axios.post(apiUrl + '/' + businessId + '/reviews', inputData, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.status === 200) {
                dispatch(addReviewsSuccess(response.data));
            } else {
                dispatch(addResponseMessage(response.data));
            }
        })
        .catch(error => {
            if (error.response) {
                dispatch(addResponseMessage(error.response.data));
            }
        });
    };
};
