import axios from 'axios';
import * as actionTypes from './actionTypes';

const apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/auth/register';

export const registerUserFailed = (error) => {
    return {
        type: actionTypes.REGISTER_USER_FAILED,
        error,
  }
};

export const registerUserSuccess = (user) => {
    return {
        type: actionTypes.REGISTER_USER_SUCCESS,
        user
    }
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
