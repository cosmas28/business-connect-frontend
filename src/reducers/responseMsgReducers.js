// ./src/reducers/businessReducers.js

/**
 *
 * @param {Array} currentState - current store state of messages object
 * @param {string} action - a store dispatched action type
 * @returns {Array} - next store state of messages object
 */
const toastInitialState = {
  message: "",
  status: ""
};

export const responseMessageReducer = (state = toastInitialState, action) => {
  switch (action.type) {
    case "ADD_RESPONSE_MESSAGE":
      return {
        ...state,
        message: action.message,
        status: action.status
      };
    default:
      return state;
  }
};
