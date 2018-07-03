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
