import axios from 'axios';
import * as actionTypes from './actionTypes';

const apiUrl = 'http://127.0.0.1:5000/api/v2/auth/reset_password/';

export const confirmEmailFailed = (error) => {
    return {
        error,
        type: actionTypes.CONFIRM_EMAIL_FAIL
    };
};

export const confirmEmailSuccess = (message) => {
    return {
        message,
        type: actionTypes.CONFIRM_EMAIL_SUCCESS
    };
};

export const resetPasswordSuccess = (message) => {
    return {
        message,
        type: actionTypes.RESET_PASSWORD_SUCCESS
    };
};

export const resetPasswordFailed = (error) => {
    return {
        error,
        type: actionTypes.RESET_PASSWORD_FAIL
    };
};

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
