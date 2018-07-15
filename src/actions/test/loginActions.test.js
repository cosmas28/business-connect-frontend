import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../loginActions';
import * as types from '../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login action tests', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const loginInput = {};

    it('creates LOGIN_SUCCESS action after successfully login', done => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                response: {
                    message: 'You have successfully login!',
                    status_code: 200
                }
            });
        });

        const expectedAction = [
            {
                loginResponse: {
                    message: 'You have successfully login!',
                    status_code: 200
                },
                type: types.LOGIN_SUCCESS
            }
        ];

        const store = mockStore({ login: [] });

        return store.dispatch(actions.doLogin(loginInput)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
            done();
        });
    });

    it('creates LOGIN_FAILED action after successfully login', done => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                response: {
                    message: 'Invalid username or password!',
                    status_code: 401
                }
            });
        });

        const expectedAction = [
            {
                loginError: {
                    message: 'Invalid username or password!',
                    status_code: 401
                },
                type: types.LOGIN_FAILED
            }
        ];

        const store = mockStore({ login: [] });

        return store.dispatch(actions.doLogin(loginInput)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
            done();
        });
    });
});
