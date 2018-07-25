import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { SignInPage } from '../../src/components/signin/SigninPage';

describe('tests for SignInPage component', () => {
    it('Render without crashing', () => {
        const mockMessage = {};

        const mockDeleteMessage = jest.fn();
        const mockDoLogin = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><SignInPage
                loginResponse={mockMessage}
                deleteMessage={mockDeleteMessage}
                doLogin={mockDoLogin}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
