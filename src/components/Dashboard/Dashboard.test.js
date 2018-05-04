import React from 'react';
import Dashboard from './Dashboard';
import { MemoryRouter } from 'react-router-dom';

describe('Dashboard test suite', () => {
    const component = mount(<MemoryRouter>
        <Dashboard
            access_token="secret token"
            user_id={1}
        />
    </MemoryRouter>);

    it('renders without crashing', () => {
        expect(component).toHaveLength(1);
    });
});
