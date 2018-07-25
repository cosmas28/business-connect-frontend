import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { DetailBusinessView } from '../../src/components/Dashboard/DetailBusinessView';

describe('tests for DetailBusinessView component', () => {
    it('Render without crashing', () => {
        const mockMessage = {
            message: 'You have successfully created an account!',
            status_ode: 201
        };
        const mockBusiness = {};
        const mockAddReview = jest.fn();
        const mockFetchBusiness = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><DetailBusinessView
                message={mockMessage}
                business={mockBusiness}
                match={{ params: { businessId: 1 }, isExact: true, path: '', url: '' }}
                addReview={mockAddReview}
                fetchBusinessesById={mockFetchBusiness}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
