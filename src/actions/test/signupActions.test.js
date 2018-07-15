import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../signupActions';
import * as types from '../actionTypes';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sign up actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const signUpInput = {};

    it('creates REGISTER_USER_SUCCESS after successfully user registration', done => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                response: {
                    message: 'You have successfully created an account!',
                    status_code: 201
                }
            });
        });

        const expectedActions = [
            {
                type: types.REGISTER_USER_SUCCESS,
                user: {
                    message: 'You have successfully created an account!',
                    status_code: 201
                }
            }
        ];

        const store = mockStore({ user: [] });

        return store.dispatch(actions.registerUser(signUpInput)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });

    it('creates REGISTER_USER_FAILED when user registration failed', done => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                response: {
                    message: 'This user already exists!',
                    status_code: 406
                },
                status: 406
            });
        });

        const expectedActions = [
            {
                error: {
                    message: 'This user already exists!',
                    status_code: 406
                },
                type: types.REGISTER_USER_FAILED
            }
        ];

        const store = mockStore({ error: [] });

        return store.dispatch(actions.registerUser(signUpInput)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });
});
