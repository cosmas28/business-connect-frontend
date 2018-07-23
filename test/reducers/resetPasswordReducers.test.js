import { confirmEmailReducer, resetPasswordReducer } from '../../src/reducers/resetPasswordReducers';
import * as types from '../../src/actions/actionTypes';

describe('reset password reducers tests', () => {
    describe('test reset password reducer', () => {
        it('should return the initial state', () => {
            expect(resetPasswordReducer(undefined, {})).toEqual({});
        });

        it('should handle RESET_PASSWORD_SUCCESS action', () => {
            expect(resetPasswordReducer({}, {
                message: {
                    response_message: 'You have successfully reset your password!',
                    status_code: 200
                },
                type: types.RESET_PASSWORD_SUCCESS
            })).toEqual({
                response_message: 'You have successfully reset your password!',
                status_code: 200
            });
        });

        it('should handle RESET_PASSWORD_FAIL action', () => {
            expect(resetPasswordReducer({}, {
                error: {
                    response_message: 'Password does not match!',
                    status_code: 406
                },
                type: types.RESET_PASSWORD_FAIL
            }));
        });
    });
});
