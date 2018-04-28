import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import SignUpForm from './SignupForm';

describe('Sign up form', () => {
    let props = null;
    const mockRegisterUser = jest.fn();
    const mockInputChange = jest.fn();
    let mountedSignUpForm;
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
            outPutMessage: null
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

    describe('when `outPutMessage` is passed', () => {
        beforeEach(() => {
            props.outPutMessage = 'You have successfully created account!';
        });

        it('renders a `Alert box`', () => {
            const alertDiv = component().find('div.alert');
            expect(alertDiv.length).toBe(1);
        });
    });

    describe('when `outPutMessage` is null', () => {
        beforeEach(() => {
            props.outPutMessage = null;
        });

        it('renders a `Alert box`', () => {
            const alertDiv = component().find('div.alert');
            expect(alertDiv.length).toBe(0);
        });
    });
});
