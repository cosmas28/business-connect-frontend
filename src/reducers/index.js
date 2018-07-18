import { combineReducers } from 'redux';
import {
    businessesReducer,
    userBusinessReducer,
    businessReducer,
    deleteBusinessReducer
} from './businessesReducers';
import { responseMessageReducer } from './responseMsgReducers';
import { confirmEmailReducer, resetPasswordReducer } from './resetPasswordReducers';

export default combineReducers({
    business: businessReducer,
    businessDelete: deleteBusinessReducer,
    businesses: businessesReducer,
    mail: confirmEmailReducer,
    messages: responseMessageReducer,
    resetPassword: resetPasswordReducer,
    userBusinesses: userBusinessReducer
});
