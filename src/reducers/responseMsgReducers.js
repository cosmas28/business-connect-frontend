export const responseMessageReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'ADD_RESPONSE_MESSAGE':
            return action.message;
        case 'DELETE_RESPONSE_MESSAGE':
            for (const key in currentState) {
                delete currentState[key];
            }
            
            return currentState;
        default:
            return currentState;
    }
};
