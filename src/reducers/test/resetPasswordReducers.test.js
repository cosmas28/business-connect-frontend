import { confirmEmailReducer, resetPasswordReducer } from '../resetPasswordReducers';
import * as types from '../../actions/actionTypes';

describe('reset password reducers tests', () => {
    describe('email confirmation reducer tests', () => {
        it('should return the initial state', () => {
            expect(confirmEmailReducer(undefined, {})).toEqual({});
        });

        it('should handle CONFIRM_EMAIL_SUCCESS action', () => {
            expect(confirmEmailReducer({}, {
                message: {
                    response_message: 'Email sent. Confirm you are the owner of this email address!',
                    status_code: 200
                },
                type: types.CONFIRM_EMAIL_SUCCESS
            })).toEqual({
                response_message: 'Email sent. Confirm you are the owner of this email address!',
                status_code: 200
            });
        });

        it('should handle CONFIRM_EMAIL_FAIL action', () => {
            expect(confirmEmailReducer({}, {
                error: {
                    response_message: 'Email does not exist!',
                    status_code: 406
                },
                type: types.CONFIRM_EMAIL_FAIL
            })).toEqual({
                response_message: 'Email does not exist!',
                status_code: 406
            });
        });
    });

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
