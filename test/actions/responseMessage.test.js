import { addResponseMessage, deleteResponseMessages } from '../../src/actions/responseMessage';
import * as actionTypes from '../../src/actions/actionTypes';

describe('test response message actions', () => {
    it('should return message object and action type', () => {
        expect(addResponseMessage({
            message: 'successful log in!',
            status_code: 200
        })).toEqual({
            message: {
                message: 'successful log in!',
                status_code: 200
            },
            type: actionTypes.ADD_RESPONSE_MESSAGE
        });
    });

    it('should return action type only', () => {
        expect(deleteResponseMessages({
            message: 'successful log in!',
            status_code: 200
        })).toEqual({ type: actionTypes.DELETE_RESPONSE_MESSAGE });
    });
});
