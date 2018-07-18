import { responseMessageReducer } from '../responseMsgReducers';
import * as types from '../../actions/actionTypes';

describe('response message reducer tests', () => {
    it('should return the initial state', () => {
        expect(responseMessageReducer(undefined, {})).toEqual([]);
    });

    it('should handle ADD_RESPONSE_MESSAGE  action', () => {
        expect(responseMessageReducer({}, {
            message: {
                response_message: 'Email sent. Confirm you are the owner of this email address!',
                status_code: 200
            },
            type: types.ADD_RESPONSE_MESSAGE
        })).toEqual({
            response_message: 'Email sent. Confirm you are the owner of this email address!',
            status_code: 200
        });
    });

    it('should handle DELETE_RESPONSE_MESSAGE', () => {
        expect(responseMessageReducer({}, {
            error: {
                response_message: 'Email does not exist!',
                status_code: 406
            },
            type: types.DELETE_RESPONSE_MESSAGE
        })).toEqual({});
    });
});
