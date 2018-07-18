import * as actionTypes from './actionTypes';

export const addResponseMessage = message => {
    return {
        message,
        type: actionTypes.ADD_RESPONSE_MESSAGE
    };
};

export const deleteResponseMessages = () => {
    return { type: actionTypes.DELETE_RESPONSE_MESSAGE };
};
