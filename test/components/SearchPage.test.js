import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../src/components/Dashboard/SearchPage';

describe('tests for SearchPage component', () => {
    it('Render without crashing', () => {
        const mockMessage = {
            message: 'You have successfully deleted the business!',
            status_ode: 204
        };
        const mockBusinesses = [];
        const mockSearchResults = {};
        const mockDeleteBusiness = jest.fn();
        const mockDeleteMessage = jest.fn();
        const mockSearchBusinesses = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><SearchPage
                match={{
                    isExact: true,
                    params: { search: 'nairobi' },
                    path: '',
                    url: ''
                }}
                message={mockMessage}
                businesses={mockBusinesses}
                deleteBusiness={mockDeleteBusiness}
                deleteMessage={mockDeleteMessage}
                searchBusinesses={ mockSearchBusinesses}
                searchResults={mockSearchResults}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
