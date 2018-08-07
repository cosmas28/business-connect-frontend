import React from 'react';
import ReactDOM from 'react-dom';

import AlertMessage from '../../src/components/common/AlertMessage';

it('renders navbar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AlertMessage alertMessage="Successfully deleted" statusCode={200} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
