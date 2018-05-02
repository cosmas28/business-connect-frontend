import React from 'react';
import UserBusinessView from './UserBusinessView';
import { MemoryRouter } from 'react-router-dom';

describe('Dashboard test suite', () => {
    const component = mount(<MemoryRouter>
        <UserBusinessView
            access_token="secret token"
            user_id={1}
        />
    </MemoryRouter>);

    it('renders without crashing', () => {
        expect(component).toHaveLength(1);
    });
});
