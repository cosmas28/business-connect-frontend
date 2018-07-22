import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../src/actions/businessActions';
import * as types from '../../src/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('business interaction tests', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const dataInput = {};
    const mockFetchedBusinesses = {};
    const mockAccessToken = 'thisismybesttokenin2018';
    const mockBusinesssId = 1;

    describe('business registration action tests', () => {
        it('should create ADD_RESPONSE_MESSAGE action', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: {
                        respond_message: 'Business is successfully registered!',
                        status_code: 201
                    }
                });
            });
            const expectedAction = [
                {
                    message: {
                        respond_message: 'Business is successfully registered!',
                        status_code: 201
                    },
                    type: types.ADD_RESPONSE_MESSAGE
                }
            ];

            const store = mockStore({ registerBusiness: [] });

            return store.dispatch(actions.registerBusiness(mockAccessToken, dataInput)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
                done();
            });
        });
        it('should create ADD_RESPONSE_MESSAGE action', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: {
                        respond_message: 'The business name already exists!',
                        status_code: 406
                    }
                });
            });
            const expectedAction = [
                {
                    message: {
                        respond_message: 'The business name already exists!',
                        status_code: 406
                    },
                    type: types.ADD_RESPONSE_MESSAGE
                }
            ];

            const store = mockStore({ registerBusiness: [] });

            return store.dispatch(actions.registerBusiness(mockAccessToken, dataInput)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
                done();
            });
        });
    });

    describe('fetch all businesses tests', () => {
        it('should create FETCH_ALL_BUSINESSES_SUCCESS action after successfuly fetched all busiesses', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: mockFetchedBusinesses,
                    status: 200
                });
            });

            const expectedAction = [
                {
                    businesses: mockFetchedBusinesses,
                    type: types.FETCH_ALL_BUSINESSES_SUCCESS
                }
            ];

            const store = mockStore({ businesses: [] });

            return store.dispatch(actions.fetchBusinesses(mockAccessToken)).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
                done();
            });
        });

        it('should create FETCH_ALL_BUSINESSES_FAIL action after failing to fetch businesses', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: {
                        respond_message: 'There is an internal server error!',
                        status_code: 500
                    }
                });
            });
            const expectedAction = [
                {
                    error: {
                        respond_message: 'There is an internal server error!',
                        status_code: 500
                    },
                    type: types.FETCH_ALL_BUSINESSES_FAIL
                }
            ];

            const store = mockStore({ businesses: [] });

            return store.dispatch(actions.fetchBusinesses(mockAccessToken)).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
                done();
            });
        });
    });

    describe('fetch business by ID tests', () => {
        it('should create FETCH_BUSINESSES_BY_ID_SUCCESS action after successfuly fetched a busiess', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: mockFetchedBusinesses,
                    status: 200
                });
            });

            const expectedAction = [
                {
                    business: mockFetchedBusinesses,
                    type: types.FETCH_BUSINESSES_BY_ID_SUCCESS
                }
            ];

            const store = mockStore({ business: [] });

            return store.dispatch(actions.fetchBusinessesById(mockAccessToken, mockBusinesssId)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
                done();
            });
        });

        it('should create FETCH_BUSINESSES_BY_ID_FAIL action after failing to fetch a business', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: {
                        respond_message: 'Business is not registered!',
                        status_code: 404
                    }
                });
            });

            const expectedAction = [
                {
                    error: {
                        respond_message: 'Business is not registered!',
                        status_code: 404
                    },
                    type: types.FETCH_BUSINESSES_BY_ID_FAIL
                }
            ];

            const store = mockStore({ business: [] });

            return store.dispatch(actions.fetchBusinessesById(mockAccessToken, mockBusinesssId)).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
                done();
            });
        });
    });

    describe('fetch business by user ID tests', () => {
        const mockUserId = 1;

        it('should create FETCH_BUSINESSES_BY_USER_ID_SUCCESS action after successfuly fetched all busiesses', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: mockFetchedBusinesses,
                    status: 200
                });
            });

            const expectedAction = [
                {
                    type: types.FETCH_BUSINESSES_BY_USER_ID_SUCCESS,
                    userBusinesses: mockFetchedBusinesses
                }
            ];

            const store = mockStore({ userBusinesses: [] });

            return store.dispatch(actions.fetchUserBusinessesById(mockAccessToken, mockUserId)).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
                done();
            });
        });

        it('should create FETCH_BUSINESSES_BY_USER_ID_FAIL action after failing to fetch a business', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: {
                        respond_message: 'You have not registered a business!',
                        status_code: 204
                    }
                });
            });

            const expectedAction = [
                {
                    error: {
                        respond_message: 'You have not registered a business!',
                        status_code: 204
                    },
                    type: types.FETCH_BUSINESSES_BY_USER_ID_FAIL
                }
            ];

            const store = mockStore({ userBusinesses: [] });

            return store.dispatch(actions.fetchUserBusinessesById(mockAccessToken, mockUserId)).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
                done();
            });
        });
    });

    describe('delete business action tests', () => {
        it('should create DELETE_BUSINESS_SUCCESS action', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: {
                        respond_message: 'Business is successfully deleted!',
                        status_code: 204
                    }
                });
            });
            const expectedAction = [
                {
                    message: {
                        respond_message: 'Business is successfully deleted!',
                        status_code: 204
                    },
                    type: types.DELETE_BUSINESS_SUCCESS
                }
            ];

            const store = mockStore({ businessDelete: [] });

            return store.dispatch(actions.deleteBusiness(mockAccessToken, mockBusinesssId)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
                done();
            });
        });
        it('should create DELETE_BUSINESS_FAIL action', done => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    response: {
                        respond_message: 'You have no permission to delete this business!',
                        status_code: 401
                    }
                });
            });
            const expectedAction = [
                {
                    error: {
                        respond_message: 'You have no permission to delete this business!',
                        status_code: 401
                    },
                    type: types.DELETE_BUSINESS_FAIL
                }
            ];

            const store = mockStore({ businessDelete: [] });

            return store.dispatch(actions.deleteBusiness(mockAccessToken, mockBusinesssId)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
                done();
            });
        });
    });
});
