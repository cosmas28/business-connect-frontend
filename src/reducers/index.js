// ./src/reducers/index.js
import { combineReducers } from 'redux';
import {
    businessesReducer,
    userBusinessReducer,
    businessReducer
} from './businessesReducers';
import { responseMessageReducer } from './responseMsgReducers';
import { resetPasswordReducer } from './resetPasswordReducers';

// root reducer
export default combineReducers({
    business: businessReducer,
    businesses: businessesReducer,
    messages: responseMessageReducer,
    resetPassword: resetPasswordReducer,
    userBusinesses: userBusinessReducer
});
