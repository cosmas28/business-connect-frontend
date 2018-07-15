import { loginReducer } from '../loginReducers';
import * as types from '../../actions/actionTypes';

describe('login reducers tests', () => {
    it('should return the initial state', () => {
        expect(loginReducer(undefined, {})).toEqual({});
    });

    it('should handle LOGIN_SUCCESS action type', () => {
        expect(loginReducer({}, {
            loginResponse: {
                response_message: 'You have successfully login!',
                status_code: 200
            },
            type: types.LOGIN_SUCCESS
        })).toEqual({
            response_message: 'You have successfully login!',
            status_code: 200
        });
    });

    it('should handle LOGIN_FAILED action type', () => {
        expect(loginReducer({}, {
            loginError: {
                response_message: 'User already exists. Sign in!',
                status_code: 406
            },
            type: types.LOGIN_FAILED
        })).toEqual({
            response_message: 'User already exists. Sign in!',
            status_code: 406
        });
    });
});
