import React from 'react';
import ResetPasswordPage from './ResetPasswordPage';

describe('Reset password Page test suite', () => {
    const component = shallow(
        <ResetPasswordPage />
    );
    it('renders reset password page without crashing', () => {
        expect(component).toMatchSnapshot();
    });
});