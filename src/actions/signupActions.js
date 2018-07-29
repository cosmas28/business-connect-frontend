// ./src/actions/signupActions.js
import axios from 'axios';
import * as actionTypes from './actionTypes';
import history from '../helpers/history';
import { addResponseMessage } from './responseMessage';

// API URL
const apiUrl = process.env.REACT_APP_API_URL + '/api/v2/auth/register';

/**
 *
 * @param {Object} user - an object of user signup input data
 * @returns {Function} a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const registerUser = (user) => {
    return (dispatch) => {
        return axios.post(apiUrl, user)
        .then(response => {
            if (response.data.status_code === 201) {
                dispatch(addResponseMessage(response.data));
                history.push('/login');
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
