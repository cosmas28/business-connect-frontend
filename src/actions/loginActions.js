import axios from 'axios';
import * as actionTypes from './actionTypes';
import history from './../helpers/history';

const apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/auth/login';

export const loginFailed = (loginError) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        loginError
    }
};

export const loginSuccess = (loginResponse) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        loginResponse
    }
};

export const doLogin = (loginInput) => {
    return (dispatch) => {
        return axios.post(apiUrl, loginInput)
        .then(response => {
            if (response.data.status_code === 200){
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('accessToken', response.data.access_token);
                dispatch(loginSuccess(response.data))
            } else {
                dispatch(loginFailed(response.data))
                history.replace('/login');
            }
        })
        .catch(error => {
            if (error.response) {
                dispatch(loginFailed(error.response.data))
                history.replace('/login');
            }
        });
    };
};
