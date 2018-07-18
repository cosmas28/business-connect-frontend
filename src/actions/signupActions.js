import axios from 'axios';
import * as actionTypes from './actionTypes';
import history from '../helpers/history';
import { addResponseMessage } from './responseMessage';

const apiUrl = 'http://127.0.0.1:5000/api/v2/auth/register';

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
