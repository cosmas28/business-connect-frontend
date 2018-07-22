// ./src/actions/loginActions.js
import axios from 'axios';
import history from '../helpers/history';
import { addResponseMessage } from './responseMessage';

// API URL
const apiUrl = 'http://127.0.0.1:5000/api/v2/auth/login';

/**
     *
     * @param {Object} loginInput - login user input data
     * @returns {Function} returns a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const doLogin = (loginInput) => {
    return (dispatch) => {
        return axios.post(apiUrl, loginInput)
        .then(response => {
            if (response.data.status_code === 200) {
                dispatch(addResponseMessage(response.data));
                history.push('/dashboard');
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('accessToken', response.data.access_token);
                sessionStorage.setItem('userId', response.data.user_id);
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
