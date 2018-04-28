import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import SignUpForm from './SignupForm';

describe('Sign up form', () => {
    const mockRegisterUser = jest.fn();
    const component = shallow(
        <SignUpForm registerUser={mockRegisterUser} />
    ),
        userInfo = {
            'confirm_password': 'andela2018',
            'email': 'cosmas@andela.com',
            'first_name': 'augustino',
            'last_name': 'billa',
            'password': 'andela2018',
            'username': 'cosmas'
        };

    it('renders and matches our snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('contains the form', () => {
        expect(component.find('input')).toHaveLength(6);
        expect(component.find('button')).toHaveLength(1);
    });

    it('should call registerUser when submit button is called', () => {
        component.find('form').simulate('submit', { preventDefault: () => {} });
        expect(mockRegisterUser).toBeCalled();
    });

    it('should register call registerUser based on the value in the state', () => {
        component.setState({ userInfo });
        component.find('form').simulate('submit', { preventDefault: () => {} });
        expect(mockRegisterUser).toBeCalled();
    });
});
