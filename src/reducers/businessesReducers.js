const businessesInitialState = {
  data: [],
  isLoading: false
};

export const businessesReducer = (state = businessesInitialState, action) => {
  switch (action.type) {
    case "REGISTER_BUSINESS_SUCCESS":
      return {
        ...state,
        data: [action.business, ...state.data]
      };
    case "FETCH_ALL_BUSINESSES_SUCCESS":
      return {
        ...state,
        data: action.businesses
      };
    case "UPDATE_BUSINESS_SUCCESS":
      return {
        ...state,
        data: state.data.map(business =>
          business.id === action.business.id ? action.business : business
        )
      };
    case "DELETE_BUSINESS_SUCCESS":
      return {
        ...state,
        data: state.data.filter(business => business.id !== action.business.id)
      };
    default:
      return state;
  }
};

export const businessReducer = (currentState = {}, action) => {
  switch (action.type) {
    case "FETCH_BUSINESSES_BY_ID_SUCCESS":
      return action.business;
    case "FETCH_BUSINESSES_BY_ID_FAIL":
      return action.error;
    default:
      return currentState;
  }
};

export const userBusinessReducer = (currentState = [], action) => {
  switch (action.type) {
    case "FETCH_BUSINESSES_BY_USER_ID_SUCCESS":
      return action.userBusinesses;
    case "FETCH_BUSINESSES_BY_USER_ID_FAIL":
      return action.error;
    default:
      return currentState;
  }
};

export const searchReducer = (currentState = [], action) => {
  switch (action.type) {
    case "SEARCH_BUSINESSES_SUCCESS":
      return action.businesses;
    default:
      return currentState;
  }
};
