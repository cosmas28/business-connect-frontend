import axios from 'axios';
import * as actionTypes from './actionTypes';

const apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/businesses';

export const fetchBusinessesSuccess = (businesses) => {
    return {
        type: actionTypes.FETCH_ALL_BUSINESSES_SUCCESS,
        businesses
    }
};

export const fetchBusinesses = (accessToken) => {
    return (dispatch) => {
        return axios.get(apiUrl, { 'headers': { 'Authorization': `Bearer ${accessToken}` }})
        .then(response => {
            dispatch(fetchBusinessesSuccess(response.data.business_list))
        })
        .catch(error => {
            throw(error);
        });
    };
};
