import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../signupActions';
import * as types from '../actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sign up actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    const mockInput = {
        email: 'victor.mutai@andela.com',
        username: 'jamboo',
        first_name: 'victor',
        last_name: 'mutai',
        password: 'Password123',
        confirm_password: 'Password123'
    };

    it('returns REGISTER_USER_FAILED when user failed to signup', () => {
        fetchMock.postOnce(
            'https://weconnect-v2.herokuapp.com/api/v2/auth/register',
            { }
        );

        const expectedActions = [
            {
                type: types.REGISTER_USER_FAILED,
                error: {
                    message: 'User already exists. Sign in!',
                    status_code: 406
                }
            },
        ];
        const store = mockStore({ result: [] });

        return store.dispatch(actions.registerUser(mockInput)).then((data) => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });
})
