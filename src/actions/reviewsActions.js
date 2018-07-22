// ./src/actions/reviewsActions
import axios from 'axios';
import { addResponseMessage } from './responseMessage';
import history from '../helpers/history';

// API URL
const apiUrl = 'http://127.0.0.1:5000/api/v2/businesses';

/**
 *
 * @param {string} accessToken - API authorization access token
 * @param {number} businessId - unique business id
 * @param {Object} inputData - a business review
 * @returns {Function} returns a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const addReviews = (accessToken, businessId, inputData) => {
    return (dispatch) => {
        return axios.post(apiUrl + '/' + businessId + '/reviews', inputData, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.status === 200) {
                history.push('/businesses/' + businessId);
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
