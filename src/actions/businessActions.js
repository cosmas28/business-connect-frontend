import axios from 'axios';
import * as actionTypes from './actionTypes';
import history from '../helpers/history';
import { addResponseMessage } from './responseMessage';

const apiUrl = 'http://127.0.0.1:5000/api/v2/businesses';

export const fetchBusinessesSuccess = (businesses) => {
    return {
        businesses,
        type: actionTypes.FETCH_ALL_BUSINESSES_SUCCESS
    };
};

export const fetchBusinessesFail = (error) => {
    return {
        error,
        type: actionTypes.FETCH_ALL_BUSINESSES_FAIL
    };
};

export const fetchUserBusinessesSuccess = (userBusinesses) => {
    return {
        type: actionTypes.FETCH_BUSINESSES_BY_USER_ID_SUCCESS,
        userBusinesses
    };
};

export const fetchUserBusinessesFail = (error) => {
    return {
        error,
        type: actionTypes.FETCH_BUSINESSES_BY_USER_ID_FAIL
    };
};

export const fetchBusinessesByIdSuccess = (business) => {
    return {
        business,
        type: actionTypes.FETCH_BUSINESSES_BY_ID_SUCCESS
    };
};

export const fetchBusinessesByIdFail = (error) => {
    return {
        error,
        type: actionTypes.FETCH_BUSINESSES_BY_ID_FAIL
    };
};

export const deleteBusinessSuccess = (message) => {
    return {
        message,
        type: actionTypes.DELETE_BUSINESS_SUCCESS
    };
};

export const deleteBusinessFail = (error) => {
    return {
       error,
        type: actionTypes.DELETE_BUSINESS_FAIL
    };
};

export const fetchBusinesses = (accessToken) => {
    return (dispatch) => {
        return axios.get(apiUrl, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.status === 200) {
                dispatch(fetchBusinessesSuccess(response.data.business_list));
            } else {
                dispatch(fetchBusinessesFail(response.data.response_message));
            }
        })
        .catch(error => {
            dispatch(fetchBusinessesFail(error.response.data));
        });
    };
};

export const fetchUserBusinessesById = (accessToken, userId) => {
    return (dispatch) => {
        return axios.get(apiUrl + '/user/' + userId, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.status === 200) {
                dispatch(fetchUserBusinessesSuccess(response.data.business_list));
            } else {
                dispatch(fetchUserBusinessesFail(response.data.response_message));
            }
        })
        .catch(error => {
            if (error.response) {
                dispatch(fetchUserBusinessesFail(error.response.data));
            }
        });
    };
};

export const fetchBusinessesById = (accessToken, businessId) => {
    return (dispatch) => {
        return axios.get(apiUrl + '/' + businessId, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.status === 200) {
                dispatch(fetchBusinessesByIdSuccess(response.data));
            } else {
                dispatch(fetchBusinessesByIdFail(response.data.response_message));
            }
        })
        .catch(error => {
            if (error.response) {
                dispatch(fetchBusinessesByIdFail(error.response.data));
            }
        });
    };
};

export const registerBusiness = (accessToken, inputData) => {
    return (dispatch) => {
        return axios.post(apiUrl, inputData, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.data.status_code === 201) {
                dispatch(addResponseMessage(response.data));
                history.push('/dashboard');
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

export const deleteBusiness = (accessToken, businessId) => {
    return (dispatch) => {
        return axios.delete(apiUrl + '/' + businessId, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.data.status_code === 204) {
                dispatch(deleteBusinessSuccess(response.data));
                history.push('/dashboard');
            } else {
                dispatch(deleteBusinessFail(response.data));
            }
        })
        .catch(error => {
            if (error.response) {
                dispatch(deleteBusinessFail(error.response.data));
            }
        });
    };
};
