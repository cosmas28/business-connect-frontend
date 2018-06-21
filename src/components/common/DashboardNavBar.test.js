import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import DashboardNavBar from './DashboardNavBar';

it('renders navbar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter><DashboardNavBar /></MemoryRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
