// ./src/actions/businessActions.js
import axios from 'axios';
import * as actionTypes from './actionTypes';
import history from '../helpers/history';
import { showToast } from './showToast';

// API URL
const apiUrl = process.env.REACT_APP_API_URL + '/businesses';

/**
 *
 * @param {Array} businesses - an array of business objects
 * @returns {Object} - an object of action type and array of businesses
 */
export const fetchBusinessesSuccess = (businesses) => {
    return {
        businesses,
        type: actionTypes.FETCH_ALL_BUSINESSES_SUCCESS
    };
};

/**
 *
 * @param {Object} error - an object of error message and status code
 * @returns {Object} - an object of error message and action type
 */
export const fetchBusinessesFail = (error) => {
    return {
        error,
        type: actionTypes.FETCH_ALL_BUSINESSES_FAIL
    };
};

/**
 *
 * @param {Array} userBusinesses - an array of user businesses
 * @returns {Object} - an object of action type and array of user businesses
 */
export const fetchUserBusinessesSuccess = (userBusinesses) => {
    return {
        type: actionTypes.FETCH_BUSINESSES_BY_USER_ID_SUCCESS,
        userBusinesses
    };
};

/**
 *
 * @param {Object} error - an object of error message and status code
 * @returns {Object} - an object of error message and action type
 */
export const fetchUserBusinessesFail = (error) => {
    return {
        error,
        type: actionTypes.FETCH_BUSINESSES_BY_USER_ID_FAIL
    };
};

/**
 *
 * @param {Object} business - an object of business details
 * @returns {Object} - an object of business details and action type
 */
export const fetchBusinessesByIdSuccess = (business) => {
    return {
        business,
        type: actionTypes.FETCH_BUSINESSES_BY_ID_SUCCESS
    };
};

/**
 *
 * @param {Object} error - an object of error message and status code
 * @returns {Object} - an object of error message and action type
 */
export const fetchBusinessesByIdFail = (error) => {
    return {
        error,
        type: actionTypes.FETCH_BUSINESSES_BY_ID_FAIL
    };
};

export const doLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('userId');
    history.push('/login');

    return true;
};

/**
 *
 * @param {Array} businesses - an array of business objects
 * @returns {Object} - an object of action type and array of businesses
 */
export const searchBusinessesSuccess = (businesses) => {
    return {
        businesses,
        type: actionTypes.SEARCH_BUSINESSES_SUCCESS
    };
};

/**
 *
 * @param {string} accessToken - API authorization access token
 * @returns {Function} - a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
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
            if (error.response.status === 422 || error.response.status === 401) {
                dispatch(doLogout());
            }
            dispatch(fetchBusinessesFail(error.response.data));
        });
    };
};

/**
 *
 * @param {string} accessToken - API authorization access token
 * @param {string} searchQuery - search criteria for business
 * @returns {Function} - a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const searchBusinesses = (accessToken, searchQuery) => {
    return (dispatch) => {
        return axios.get(apiUrl + '/search?q=' + searchQuery, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.status === 200) {
                if (response.data.status_code === 404) {
                    dispatch(showToast(response.data));
                } else {
                    dispatch(searchBusinessesSuccess(response.data));
                }
            } else {
                dispatch(showToast(response.data));
            }
        })
        .catch(error => {
            if (error.response.status === 422 || error.response.status === 401) {
                dispatch(doLogout());
            }
            dispatch(showToast(error.response.data));
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
                dispatch(fetchUserBusinessesFail(response));
                history.push('/register_business');
            }
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 422 || error.response.status === 401) {
                    dispatch(doLogout());
                }
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
                if (response.data.status_code === 404) {
                    history.push('/404');
                }
                dispatch(fetchBusinessesByIdSuccess(response.data));
            } else {
                dispatch(fetchBusinessesByIdFail(response.data.response_message));
            }
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 422 || error.response.status === 401) {
                    dispatch(doLogout());
                }
                dispatch(fetchBusinessesByIdFail(error.response.data));
            }
        });
    };
};

const registerBusinessSuccess = (business) => ({
    business,
    type: actionTypes.REGISTER_BUSINESS_SUCCESS
});

export const registerBusiness = (accessToken, inputData) => {
    return (dispatch) => {
        return axios.post(apiUrl, inputData, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.data.status_code === 201) {
                dispatch(registerBusinessSuccess(response.data.data));
                dispatch(showToast(response.data.response_message, 'success'));
            } else {
                dispatch(showToast(response.data.response_message, 'failure'));
            }
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 422 || error.response.status === 401) {
                    dispatch(doLogout());
                }
                dispatch(showToast(error.response.data));
            }
        });
    };
};

const deleteBusinessSuccess = (business) => ({
    business,
    type: actionTypes.DELETE_BUSINESS_SUCCESS
});

export const deleteBusiness = (accessToken, businessId) => {
    return (dispatch) => {
        return axios.delete(apiUrl + '/' + businessId, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.data.status_code === 204) {
                dispatch(deleteBusinessSuccess(response.data.data));
                dispatch(showToast(response.data.message, 'success'));
            } else {
                dispatch(showToast(response.data));
            }
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 422 || error.response.status === 401) {
                    dispatch(doLogout());
                }
                dispatch(showToast(error.response.data));
            }
        });
    };
};

const updateBusinessSuccess = (business) => ({
    business,
    type: actionTypes.UPDATE_BUSINESS_SUCCESS
});

/**
 *
 * @param {string} accessToken - API authorization access token
 * @param {number} businessId - unique business ID for accessing business details
 * @param {newData} newData - new data to update the current business details
 * @returns {Function} - a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const updateBusiness = (accessToken, businessId, newData) => {
    return (dispatch) => {
        return axios.put(apiUrl + '/' + businessId, newData, { 'headers': { 'Authorization': `Bearer ${accessToken}` } })
        .then(response => {
            if (response.data.status_code === 200) {
                dispatch(updateBusinessSuccess(response.data.data));
                dispatch(showToast(response.data.message, 'success'));
            } else {
                dispatch(showToast(response.data.response_message, 'failure'));
            }
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 422 || error.response.status === 401) {
                    dispatch(doLogout());
                }
                dispatch(showToast(error.response.data));
            }
        });
    };
};
