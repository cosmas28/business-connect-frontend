import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SignUpForm from '../../src/components/signup/SignupForm';
import ReactDOM from 'react-dom';

describe('Sign up form', () => {
    let props = null,
        mountedSignUpForm = null;
    const mockRegisterUser = jest.fn(),
        mockInputChange = jest.fn();
    const component = () => {
        if (!mountedSignUpForm) {
            mountedSignUpForm = mount(
                <MemoryRouter><SignUpForm {...props} /></MemoryRouter>
            );
        }

        return mountedSignUpForm;
    };

    beforeEach(() => {
        props = {
            handleInputChange: mockRegisterUser,
            handleSubmitForm: mockInputChange,
            outPutMessage: null,
            tatusCode: 201
        };
        mountedSignUpForm = undefined;
    });

    it('renders without crashing', () => {
        expect(component()).toHaveLength(1);
    });

    it('contains the form', () => {
        expect(component().find('input')).toHaveLength(6);
        expect(component().find('button')).toHaveLength(1);
    });

    it('should call `handleSubmitForm` when submit button is called', () => {
        component().find('form')
        .simulate('submit');
        expect(props.handleSubmitForm).toBeCalled();
    });

    it('should call `handleInputChange` when input field is changed', () => {
        component().find('input.test')
        .simulate('change');
        expect(props.handleSubmitForm).toBeCalled();
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
});
