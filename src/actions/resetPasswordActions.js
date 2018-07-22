// ./src/actions/resetPasswordActions.js
import axios from 'axios';
import * as actionTypes from './actionTypes';

// API URL
const apiUrl = 'http://127.0.0.1:5000/api/v2/auth/reset_password/';

/**
 *
 * @param {Object} error - an object of error message and status code
 * @returns {Object} - an object of error message and action type
 */
export const confirmEmailFailed = (error) => {
    return {
        error,
        type: actionTypes.CONFIRM_EMAIL_FAIL
    };
};

/**
 *
 * @param {Object} message - an object of success message and status code
 * @return {Object} - an object of success message and action type
 */
export const confirmEmailSuccess = (message) => {
    return {
        message,
        type: actionTypes.CONFIRM_EMAIL_SUCCESS
    };
};

/**
 *
 * @param {Object} message - an object of success message and status code
 * @return {Object} - an object of success message and action type
 */
export const resetPasswordSuccess = (message) => {
    return {
        message,
        type: actionTypes.RESET_PASSWORD_SUCCESS
    };
};

/**
 *
 * @param {Object} error - an object of error message and status code
 * @returns {Object} - an object of error message and action type
 */
export const resetPasswordFailed = (error) => {
    return {
        error,
        type: actionTypes.RESET_PASSWORD_FAIL
    };
};

/**
 *
 * @param {Object} userInput - an object of email and reset password url
 * @returns {Function} - a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const confirmEmail = (userInput) => {
    return (dispatch) => {
        return axios.post(apiUrl + 'confirm_email', userInput)
        .then(response => {
            if (response.data.status_code === 200) {
                dispatch(confirmEmailSuccess(response.data));
            } else {
                dispatch(confirmEmailFailed(response.data));
            }
        })
        .catch(error => {
            if (error.response) {
                dispatch(confirmEmailFailed(error.response.data));
            }
        });
    };
};

/**
 *
 * @param {string} accessToken - API authorization access token
 * @param {Object} inputData - an object of password and confirm password data
 * @returns {Function} - a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const resetPassword = (accessToken, inputData) => {
    return (dispatch) => {
        return axios.post(apiUrl + accessToken, inputData)
        .then(response => {
            if (response.data.status_code === 200) {
                dispatch(resetPasswordSuccess(response.data));
            } else {
                dispatch(resetPasswordFailed(response.data));
            }
        })
        .catch(error => {
            dispatch(resetPasswordFailed(error.response.data));
        });
    };
};
