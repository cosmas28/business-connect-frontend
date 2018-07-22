import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../src/actions/loginActions';
import * as types from '../../src/actions/actionTypes';

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

    it('creates ADD_RESPONSE_MESSAGE action after successfully login', done => {
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
                message: {
                    message: 'You have successfully login!',
                    status_code: 200
                },
                type: types.ADD_RESPONSE_MESSAGE
            }
        ];

        const store = mockStore({ login: [] });

        return store.dispatch(actions.doLogin(loginInput)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
            done();
        });
    });

    it('creates ADD_RESPONSE_MESSAGE action after successfully login', done => {
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
                message: {
                    message: 'Invalid username or password!',
                    status_code: 401
                },
                type: types.ADD_RESPONSE_MESSAGE
            }
        ];

        const store = mockStore({ login: [] });

        return store.dispatch(actions.doLogin(loginInput)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
            done();
        });
    });
});
