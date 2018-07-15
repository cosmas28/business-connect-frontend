import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { mapStateToProps, SignUpPage } from './SignupPage';

describe(' Sign up components', () => {
    it('should map state to props correctly', () => {
        const signupRes = {
            message: 'You have successfully created an account!',
            status_ode: 201
        };

        const appState = { user: signupRes };
        const ownProps = {};
        const componentState = mapStateToProps(appState, ownProps);
        expect(componentState.response).toEqual(signupRes);
    });

    it('Render without crashing', () => {
        const sampleProps = {
            message: 'You have successfully created an account!',
            status_ode: 201
        };
        const mockRegisterUser = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><SignUpPage
                response={sampleProps}
                registerUser={mockRegisterUser}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
