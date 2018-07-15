import { registerUserReducer } from '../registerUserReducers';
import * as types from '../../actions/actionTypes';

describe('register user reducer', () => {
    it('it should return the initial state', () => {
        expect(registerUserReducer(undefined, {})).toEqual([]);
    });

    it('should handle REGISTER_USER_SUCCESS action type', () => {
        expect(registerUserReducer([], {
            type: types.REGISTER_USER_SUCCESS,
            user: {
                message: 'You have successfully created an account. Sign in!',
                status_code: 201
            }
        })).toEqual({
            message: 'You have successfully created an account. Sign in!',
            status_code: 201
        });
    });

    it('should handle REGISTER_USER_FAILED action type', () => {
        expect(registerUserReducer([], {
            error: {
                message: 'User already exists. Sign in!',
                status_code: 406
            },
            type: types.REGISTER_USER_FAILED
        })).toEqual({
            message: 'User already exists. Sign in!',
            status_code: 406
        });
    });
});
