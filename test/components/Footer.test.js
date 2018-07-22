import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../src/components/common/Footer';

it('renders footer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
