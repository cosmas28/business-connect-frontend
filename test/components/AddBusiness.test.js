import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { AddBusiness } from '../../src/components/Dashboard/AddBusiness';

describe('tests for AddBusiness component', () => {
    it('Render without crashing', () => {
        const mockMessage = '';

        const mockDeleteMessage = jest.fn();
        const mockRegisterBusiness = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><AddBusiness
                responseMessage={mockMessage}
                deleteMessage={mockDeleteMessage}
                registerBusiness={mockRegisterBusiness}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
