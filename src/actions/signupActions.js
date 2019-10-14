// ./src/actions/signupActions.js
import axios from 'axios';
import history from '../helpers/history';
import { showToast } from './showToast';

// API URL
const apiUrl = process.env.REACT_APP_API_URL + '/auth/register';

/**
 *
 * @param {Object} user - an object of user signup input data
 * @returns {Function} a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const registerUser = (user) => {
    return (dispatch) => {
        return axios.post(apiUrl, user)
        .then(response => {
            dispatch(showToast(response.data.message, 'success'));
            history.push('/login');
        })
        .catch(error => {
            dispatch(showToast(error.response.data.message, 'failure'));
        });
    };
};
