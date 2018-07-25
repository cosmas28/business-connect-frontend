import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { ConfirmEmail } from '../../src/components/resetPassword/ConfirmEmail';

describe('tests for SignUpPage component', () => {
    it('Render without crashing', () => {
        const mockMessage = {};

        const mockDoConfirmEmails = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><ConfirmEmail
                response={mockMessage}
                doConfirmEmail={mockDoConfirmEmails}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
