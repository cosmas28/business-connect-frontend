import axios from 'axios';
import { addResponseMessage } from './responseMessage';
import history from '../helpers/history';

const apiUrl = 'http://127.0.0.1:5000/api/v2/businesses';

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
