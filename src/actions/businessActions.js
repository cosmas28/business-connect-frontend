import axios from 'axios';
import * as actionTypes from './actionTypes';
import history from '../helpers/history';

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

export const registerBusinessSuccess = (message) => {
    return {
        message,
        type: actionTypes.REGISTER_BUSINESS_SUCCESS
    };
};

export const registerBusinessFailed = (error) => {
    return {
        error,
        type: actionTypes.REGISTER_BUSINESS_FAILED
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
                history.push('/dashboard');
                dispatch(registerBusinessSuccess(response.data));
            } else {
                dispatch(registerBusinessFailed(response.data));
            }
        })
        .catch(error => {
            dispatch(registerBusinessFailed(error.response.data));
        });
    };
};
