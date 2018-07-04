export const confirmEmailReducer = (currentState = {}, action) => {
    switch (action.type) {
        case 'CONFIRM_EMAIL_SUCCESS':
            return action.message;
        case 'CONFIRM_EMAIL_FAIL':
            return action.error;
        default:
            return currentState;
    }
};

export const resetPasswordReducer = (currentState = {}, action) => {
    switch (action.type) {
        case 'RESET_PASSWORD_SUCCESS':
            return action.message;
        case 'RESET_PASSWORD_FAIL':
            return action.error;
        default:
            return currentState;
    }
};
