import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import SignUpForm from './SignupForm';

describe('Sign up form', () => {
    let props = null,
        mountedSignUpForm;
    const mockRegisterUser = jest.fn(),
        mockInputChange = jest.fn();
    const component = () => {
        if (!mountedSignUpForm){
            mountedSignUpForm = mount(
                <SignUpForm {...props} />
            );
        }
        return mountedSignUpForm;
    };

    beforeEach(() => {
        props = {
            handleInputChange: mockRegisterUser,
            handleSubmitForm: mockInputChange,
            outPutSuccessMessage: null,
            outPutErrorMessage: null
        };
        mountedSignUpForm = undefined;
    });

    it('renders and matches our snapshot', () => {
        expect(component()).toMatchSnapshot();
    });

    it('contains the form', () => {
        expect(component().find('input')).toHaveLength(6);
        expect(component().find('button')).toHaveLength(1);
    });

    it('should call `handleSubmitForm` when submit button is called', () => {
        component().find('form').simulate('submit');
        expect(props.handleSubmitForm).toBeCalled();
    });

    it('should call `handleInputChange` when input field is changed', () => {
        component().find('input.test').simulate('change');
        expect(props.handleSubmitForm).toBeCalled();
    });

    describe('when `outPutSuccessMessage` is passed', () => {
        beforeEach(() => {
            props.outPutSuccessMessage = 'You have successfully created account!';
        });

        it('renders a `Success Alert box`', () => {
            const alertDiv = component().find('div.alert-success');
            expect(alertDiv.length).toBe(1);
        });
    });

    describe('when `outPutSuccessMessage` is null', () => {
        beforeEach(() => {
            props.outPutSuccessMessage = null;
        });

        it('renders a `Alert box`', () => {
            const alertDiv = component().find('div.alert-success');
            expect(alertDiv.length).toBe(0);
        });
    });

    describe('when `outPutErrorMessage` is passed', () => {
        beforeEach(() => {
            props.outPutErrorMessage = 'User already registered. Sign in';
        });

        it('renders a `Error Alert box`', () => {
            const alertDiv = component().find('div.alert-danger');
            expect(alertDiv.length).toBe(1);
        });
    });
});
