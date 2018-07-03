import axios from 'axios';
import * as actionTypes from './actionTypes';

const apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/auth/reset_password/';

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
