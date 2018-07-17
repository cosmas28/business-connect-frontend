import axios from 'axios';
import * as actionTypes from './actionTypes';
import history from '../helpers/history';

const apiUrl = 'http://127.0.0.1:5000/api/v2/auth/login';

export const loginFailed = (loginError) => {
    return {
        loginError,
        type: actionTypes.LOGIN_FAILED
    };
};

export const loginSuccess = (loginResponse) => {
    return {
        loginResponse,
        type: actionTypes.LOGIN_SUCCESS
    };
};

export const doLogin = (loginInput) => {
    return (dispatch) => {
        return axios.post(apiUrl, loginInput)
        .then(response => {
            if (response.data.status_code === 200) {
                dispatch(loginSuccess(response.data));
                history.push('/dashboard');
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('accessToken', response.data.access_token);
                sessionStorage.setItem('userId', response.data.user_id);
            } else {
                dispatch(loginFailed(response.data));
            }
        })
        .catch(error => {
            if (error.response) {
                dispatch(loginFailed(error.response.data));
            }
        });
    };
};
