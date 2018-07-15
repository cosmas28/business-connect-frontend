import axios from 'axios';
import * as actionTypes from './actionTypes';

const apiUrl = 'http://127.0.0.1:5000/api/v2/auth/register';

export const registerUserFailed = (error) => {
    return {
        error,
        type: actionTypes.REGISTER_USER_FAILED
    };
};

export const registerUserSuccess = (user) => {
    return {
        type: actionTypes.REGISTER_USER_SUCCESS,
        user
    };
};

export const registerUser = (user) => {
    return (dispatch) => {
        return axios.post(apiUrl, user)
        .then(response => {
            if (response.data.status_code === 201) {
                dispatch(registerUserSuccess(response.data));
            } else {
                dispatch(registerUserFailed(response.data));
            }
        })
        .catch(error => {
            dispatch(registerUserFailed(error.response.data));
        });
    };
};
