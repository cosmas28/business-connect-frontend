import React from 'react';
import ReactDOM from 'react-dom';

import DashboardTitle from './DashboardTitle';

it('renders navbar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DashboardTitle title="Some component title" />, div);
    ReactDOM.unmountComponentAtNode(div);
});
