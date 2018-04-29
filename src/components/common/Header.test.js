import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});
