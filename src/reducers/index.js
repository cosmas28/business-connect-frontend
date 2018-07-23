// ./src/reducers/index.js
import { combineReducers } from 'redux';
import {
    businessesReducer,
    userBusinessReducer,
    businessReducer,
    deleteBusinessReducer
} from './businessesReducers';
import { responseMessageReducer } from './responseMsgReducers';
import { resetPasswordReducer } from './resetPasswordReducers';

// root reducer
export default combineReducers({
    business: businessReducer,
    businessDelete: deleteBusinessReducer,
    businesses: businessesReducer,
    messages: responseMessageReducer,
    resetPassword: resetPasswordReducer,
    userBusinesses: userBusinessReducer
});
