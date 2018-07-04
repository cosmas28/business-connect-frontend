import axios from 'axios';
import * as actionTypes from './actionTypes';

const apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/businesses';

export const fetchBusinessesSuccess = (businesses) => {
    return {
        businesses,
        type: actionTypes.FETCH_ALL_BUSINESSES_SUCCESS
    };
};

export const fetchUserBusinessesSuccess = (userBusinesses) => {
    return {
        type: actionTypes.FETCH_BUSINESSES_BY_USER_ID,
        userBusinesses
    };
};

export const fetchBusinessesByIdSuccess = (business) => {
    return {
        business,
        type: actionTypes.FETCH_BUSINESSES_BY_ID
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
            dispatch(fetchBusinessesSuccess(response.data.business_list));
        })
        .catch(error => {
            throw error;
        });
    };
};

export const fetchUserBusinessesById = (accessToken, userId) => {
    return (dispatch) => {
        return axios.get(apiUrl + '/user/' + userId, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            dispatch(fetchUserBusinessesSuccess(response.data.business_list));
        })
        .catch(error => {
            throw error;
        });
    };
};

export const fetchBusinessesById = (accessToken, businessId) => {
    return (dispatch) => {
        return axios.get(apiUrl + '/' + businessId, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            dispatch(fetchBusinessesByIdSuccess(response.data));
        })
        .catch(error => {
            throw error;
        });
    };
};

export const registerBusiness = (accessToken, inputData) => {
    return (dispatch) => {
        return axios.post(apiUrl, inputData, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.data.status_code === 201) {
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
