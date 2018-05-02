import React from 'react';
import OneBusinessView from './UserBusinessView';
import { MemoryRouter } from 'react-router-dom';

describe('Dashboard test suite', () => {
    const component = mount(<MemoryRouter><OneBusinessView /></MemoryRouter>);

    it('renders without crashing', () => {
        expect(component).toHaveLength(1);
    });
});
