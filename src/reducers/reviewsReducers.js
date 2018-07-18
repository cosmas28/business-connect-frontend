export const reviewsReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'ADD_REVIEWS_SUCCESS':
        return [
            ...currentState,
            Object.assign({}, action.review)
          ];
        default:
            return currentState;
    }
};
